package com.gsvn.kiemtrahocki;

import android.annotation.SuppressLint;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import androidx.activity.OnBackPressedCallback;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;

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

        // Edge-to-edge nhất quán mọi phiên bản Android, rồi tự chèn padding theo insets
        // (không phụ thuộc env(safe-area) của WebView) để status bar không đè lên nội dung.
        WindowCompat.setDecorFitsSystemWindows(getWindow(), false);

        webView = new WebView(this);
        webView.setBackgroundColor(Color.parseColor("#F9F9FF")); // dải status/nav bar sáng, khớp nền app
        setContentView(webView);

        // Nền app sáng -> icon status bar / nav bar màu tối cho dễ nhìn
        WindowInsetsControllerCompat ic = WindowCompat.getInsetsController(getWindow(), webView);
        ic.setAppearanceLightStatusBars(true);
        ic.setAppearanceLightNavigationBars(true);

        // Đẩy nội dung xuống dưới status bar, lên trên navigation bar & tránh tai thỏ
        ViewCompat.setOnApplyWindowInsetsListener(webView, (v, insets) -> {
            Insets bars = insets.getInsets(
                    WindowInsetsCompat.Type.systemBars() | WindowInsetsCompat.Type.displayCutout());
            v.setPadding(bars.left, bars.top, bars.right, bars.bottom);
            return insets;
        });

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
