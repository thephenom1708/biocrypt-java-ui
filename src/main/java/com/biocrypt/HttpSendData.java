package com.biocrypt;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.io.File;

public class HttpSendData {

    final String USER_AGENT = "Mozilla/5.0";

    String POST_URL = "";

    String POST_PARAMS = "";


    HttpSendData(String POST_URL, String POST_PARAMS) {

        this.POST_URL = POST_URL;
        this.POST_PARAMS = POST_PARAMS;
    }


    String sendPOST() throws IOException {
        URL obj = new URL(POST_URL);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();
        con.setRequestMethod("POST");
        con.setRequestProperty("User-Agent", USER_AGENT);

        // For POST only - START
        con.setDoOutput(true);
        OutputStream os = con.getOutputStream();
        os.write(POST_PARAMS.getBytes());
        os.flush();
        os.close();
        // For POST only - END

        int responseCode = con.getResponseCode();
        System.out.println("POST Response Code :: " + responseCode);

        if (responseCode == HttpURLConnection.HTTP_OK) { //success
            System.out.println("POST Request worked successfully");
        } else { //not worked
            System.out.println("POST Request not worked");
        }

        BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer response = new StringBuffer();

        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();

        String tp=new String(response);
        return tp;

    }

    JsonObject sendPOSTJson() throws IOException {
        URL obj = new URL(POST_URL);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();
        con.setRequestMethod("POST");
        con.setRequestProperty("User-Agent", USER_AGENT);

        // For POST only - START
        con.setDoOutput(true);
        OutputStream os = con.getOutputStream();
        os.write(POST_PARAMS.getBytes());
        os.flush();
        os.close();
        // For POST only - END

        int responseCode = con.getResponseCode();
        System.out.println("POST Response Code :: " + responseCode);

        if (responseCode == HttpURLConnection.HTTP_OK) { //success
            System.out.println("POST Request worked successfully");
        } else { //not worked
            System.out.println("POST Request not worked");
        }

        BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer response = new StringBuffer();

        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();

        String tp=new String(response);

        JsonObject responseObj = new JsonParser().parse(response.toString()).getAsJsonObject();
        return responseObj;
    }

    /*public static void main(String[] args) {

        String url = "http://192.168.43.216:8080/apitest/tp/";
        String param = "name=Kaivalya";
        String response = new String();
        HttpSendData send1 = new HttpSendData(url, param);
        try
        {
            response = send1.sendPOST();
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
        System.out.println(response);
    }*/
}
