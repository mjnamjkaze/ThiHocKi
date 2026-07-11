plugins {
    id("com.android.application")
}

android {
    namespace = "com.gsvn.kiemtrahocki"
    compileSdk = 36

    defaultConfig {
        applicationId = "com.gsvn.kiemtrahocki"
        minSdk = 26
        targetSdk = 36
        versionCode = 3
        versionName = "1.0.2"
    }

    sourceSets {
        getByName("main") {
            // Web app (index.html, app.js, data.js, styles.css, assets/) nằm ở ../web
            assets.srcDirs("../web")
        }
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            isCrunchPngs = false
            // Ký bằng debug key để cài trực tiếp (giống AAMusic/AABrowser)
            signingConfig = signingConfigs.getByName("debug")
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
}

dependencies {
    implementation("androidx.appcompat:appcompat:1.7.1")
    implementation("androidx.webkit:webkit:1.15.0")
}
