package com.biocrypt;

import java.util.List;

public class Url {
    public static final String SHARE_URL = "./src/main/resources/shares/";
    public static final String GENERATED_SHARE_URL = "./src/main/resources/generated/";
    public static final String OUTPUT_URL = "./src/main/resources/output/";
    public static final String CURRENT_OUTPUT_URL = "./src/main/resources/current-output/";
    public static final String INPUT_URL = "./src/main/resources/input/";

    public static final String REST_SERVER_IP = "192.168.43.216";
    public static final String PORT = "8080";
    public static final List<String> nodes = List.of(
            "192.168.43.86",
            "192.168.43.216"
//            "192.168.43.188"
    );

    public static final String CREATE_SHARE_URL = "/apitest/testing/";
    public static final String GET_COORDINATES_URL = "http://" + REST_SERVER_IP + ":" + PORT + "/registration/getCoordinates/";
    public static final String VERIFY_PIN_URL = "http://" + REST_SERVER_IP + ":" + PORT + "/registration/verifyPin/";
    public static final String RETURN_SHARES_URL = "/apitest/returnShares/";
    public static final String REGISTER_URL = "http://" + REST_SERVER_IP + ":" + PORT + "/registration/register/";
}
