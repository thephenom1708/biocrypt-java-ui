package com.biocrypt;

import com.machinezoo.sourceafis.FingerprintImage;
import com.machinezoo.sourceafis.FingerprintMatcher;
import com.machinezoo.sourceafis.FingerprintTemplate;

import java.nio.file.Files;
import java.nio.file.Paths;

public class Test {
    public boolean getMatch(String path1, String path2) throws Exception {
        byte[] probeImage = Files.readAllBytes(Paths.get(path1));
        byte[] candidateImage = Files.readAllBytes(Paths.get(path2));

        FingerprintTemplate probe = new FingerprintTemplate(
                new FingerprintImage()
                        .dpi(500)
                        .decode(probeImage));

        FingerprintTemplate candidate = new FingerprintTemplate(
                new FingerprintImage()
                        .dpi(500)
                        .decode(candidateImage));

        double score = new FingerprintMatcher()
                .index(probe)
                .match(candidate);

        double threshold = 30;
        boolean matches = score >= threshold;
        System.out.println(matches + " " + score);
        return matches;
    }

    public static void main(String[] args) throws Exception {
        String path1 = "";
        String path2 = "";

        Test test = new Test();
        boolean match = test.getMatch(path1, path2);
    }
}