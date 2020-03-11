package com.biocrypt;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

class BiocryptTest {

    private final String DIR_URL = "src/test/resources/dataset-2/";
    private File dir;
    private File[] imgFiles;
    private int startX, startY, endX, endY;
    private String username;
    private final String PIN = "1708";
    private List<BufferedImage> images;

    private int N, K =2;

    @BeforeEach
    void setUp() throws IOException {
        images = new ArrayList<>();
        dir = new File(DIR_URL);
        imgFiles = dir.listFiles();

        if(imgFiles != null) {
            for(File imgFile: imgFiles) {
                BufferedImage img = ImageIO.read(imgFile);
                images.add(img);
            }
        } else {
            System.out.println("Not a Dir");
        }
    }

    @Test
    public void clearDb() throws IOException {
        for (String server : Url.nodes) {
            String deleteSharesUrl = "http://" + server + ":" + Url.PORT + Url.DELETE_SHARES_URL;
            String deleteUsersUrl = "http://" + server + ":" + Url.PORT + Url.DELETE_USERS_URL;
            String deleteUserMappingsUrl = "http://" + server + ":" + Url.PORT + Url.DELETE_USER_MAPPINGS_URL;

            HttpSendData send1 = new HttpSendData(deleteUsersUrl, "");
            send1.sendPOST();
            HttpSendData send2 = new HttpSendData(deleteSharesUrl, "");
            send2.sendPOST();
            HttpSendData send3 = new HttpSendData(deleteUserMappingsUrl, "");
            send3.sendPOST();
        }
    }


    @Test
    public void addTestImagesToDB() {
        int counter = 0;
        for(BufferedImage img: images) {
            System.out.println("\n---------START--------\n");
            counter++;
            System.out.println("Counter: " + counter);

            if(img != null) {
                startX = (int) (img.getWidth() * 0.2);
                startY = (int) (img.getHeight() * 0.2);
                endX = (int) (img.getWidth() - (img.getWidth() * 0.2));
                endY = (int) (img.getHeight() - (img.getHeight() * 0.2));
            }
            else {
                continue;
            }
            username = String.valueOf(counter);
            register(username, username);

            try {
                String coordinates = startX + "," + startY + ","
                        + endX + "," + endY;
                ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
                ImageIO.write(img, "PNG", outputStream);
                String encodedImage = Base64.getEncoder().encodeToString(outputStream.toByteArray());

                String url = Url.UPLOAD_FINGERPRINT_URL;
                String param = "fingerprint=" + URLEncoder.encode(encodedImage, StandardCharsets.UTF_8) + "&" + "username=" + username + "&"
                        + "coordinates=" + coordinates;
                String response = "";
                HttpSendData send1 = new HttpSendData(url, param);
                try {
                    response = send1.sendPOST();
                } catch (Exception e) {
                    e.printStackTrace();
                }

                ImageProcessing imageProcessing = new ImageProcessing(img, startX, startY, endX, endY, username);
                NGenerator nGenerator = new NGenerator();

                N = nGenerator.getValueOfN(PIN);

                if (K <= N) {
                    imageProcessing.generateKoutOfNShares(K, N);

                } else {
                    System.out.println("K should be less than n");
                }
            }
            catch (Exception e) {
                e.printStackTrace();
            }
            System.out.println("\n---------END--------");
        }
    }

    @Test
    public void shouldWorkForAllTestImages() {
        List<String> names = new ArrayList<>();

        for(String name: names) {
            login(name, PIN);
        }
    }

    private void register(String name, String username) {
        String url = Url.REGISTER_URL;
        String param = "name=" + name + "&" + "username=" + username + "&" + "pin=" + PIN;
        HttpSendData send1 = new HttpSendData(url, param);
        try {
            send1.sendPOST();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void login(String username, String pin) {
        String url = Url.VERIFY_PIN_URL;
        String param = "username=" + username + "&" + "pin=" + pin;
        String response = "";
        HttpSendData send1 = new HttpSendData(url, param);
        try {
            response = send1.sendPOST();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private List<String> getUserNames() {
        String url = Url.GET_USERS_URL;
        HttpSendData send = new HttpSendData(url, "");
        JsonObject response;
        List<String> names = new ArrayList<>();

        try {
            response = send.sendPOSTJson();
            JsonArray jsonNamesArray = response.getAsJsonArray("users");
            for(JsonElement element: jsonNamesArray) {
                names.add(element.getAsJsonObject().get("name").getAsString());
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return names;
    }
}