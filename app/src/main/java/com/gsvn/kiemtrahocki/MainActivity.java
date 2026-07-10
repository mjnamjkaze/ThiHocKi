package com.gsvn.kiemtrahocki;

import android.annotation.SuppressLint;
import android.net.Uri;
import android.os.Bundle;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import androidx.activity.OnBackPressedCallback;
import androidx.appcompat.app.AppCompatActivity;

import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

public class MainActivity extends AppCompatActivity {

    private static final String HOST = "appassets.androidx.dev";
    private static final Map<String, String> MIME = new HashMap<>();
    static {
        MIME.put("html", "text/html");
        MIME.put("js", "text/javascript");
        MIME.put("css", "text/css");
        MIME.put("png", "image/png");
        MIME.put("svg", "image/svg+xml");
        MIME.put("json", "application/json");
        MIME.put("woff2", "font/woff2");
    }

    private WebView webView;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        webView = new WebView(this);
        setContentView(webView);

        WebSettings s = webView.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);   // localStorage: lưu tên + kết quả các đề

        webView.setWebViewClient(new WebViewClient() {
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                return serveAsset(request.getUrl());
            }
        });

        webView.loadUrl("https://" + HOST + "/assets/index.html");

        // Nút Back của máy: để SPA tự điều hướng, hết màn hình thì thoát app
        getOnBackPressedDispatcher().addCallback(this, new OnBackPressedCallback(true) {
            @Override
            public void handleOnBackPressed() {
                webView.evaluateJavascript(
                        "(window.androidBack && window.androidBack()) === true",
                        value -> {
                            if (!"true".equals(value)) finish();
                        });
            }
        });
    }

    /** Phục vụ file trong assets/ cho URL dạng https://appassets.androidx.dev/assets/... */
    private WebResourceResponse serveAsset(Uri url) {
        if (!HOST.equals(url.getAuthority())) return null;
        String path = url.getPath();
        if (path == null || !path.startsWith("/assets/")) return null;
        String assetPath = path.substring("/assets/".length());
        if (assetPath.isEmpty()) assetPath = "index.html";
        if (assetPath.contains("..")) return null;
        try {
            InputStream is = getAssets().open(assetPath);
            String ext = assetPath.contains(".")
                    ? assetPath.substring(assetPath.lastIndexOf('.') + 1).toLowerCase()
                    : "";
            String mime = MIME.containsKey(ext) ? MIME.get(ext) : "application/octet-stream";
            Map<String, String> headers = new HashMap<>();
            headers.put("Access-Control-Allow-Origin", "*");
            return new WebResourceResponse(mime, "utf-8", 200, "OK", headers, is);
        } catch (Exception e) {
            return null;
        }
    }
}
