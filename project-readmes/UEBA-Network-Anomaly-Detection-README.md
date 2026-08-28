# 🛡️ UEBA Network Log Anomaly Detection Engine (C-DAC Internship)

[![TensorFlow](https://img.shields.io/badge/TensorFlow-Autoencoders-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)](https://tensorflow.org)
[![Scikit-Learn](https://img.shields.io/badge/Isolation_Forest-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white)](https://scikit-learn.org)
[![Elasticsearch](https://img.shields.io/badge/Elasticsearch-005571?style=for-the-badge&logo=elasticsearch&logoColor=white)](https://elastic.co)
[![Impact](https://img.shields.io/badge/Detection_Boost-+25%25-green?style=for-the-badge)](#-impact--key-achievements)

Developed during cybersecurity research internship at **Centre for Development of Advanced Computing (C-DAC, Govt. of India)**. A User and Entity Behavior Analytics (**UEBA**) framework to detect lateral movement, credential theft, and geographic anomaly vectors in enterprise security logs.

---

## 🎯 Key Achievements & Impact

- 🚀 **+25% Threat Detection Accuracy** over traditional rule-based SIEM signatures.
- 📉 **40% Reduction in False Positives**, minimizing Security Operations Center (SOC) alert fatigue.
- ⚡ **Real-Time Data Pipeline**: Ingestion of streaming log data using Python, Elasticsearch, and NoSQL stores.

---

## 🏗️ Architecture & Model Pipeline

```
[ Raw Enterprise Logs ] ➔ [ Elasticsearch Ingestion ] ➔ [ Feature Extraction & Normalization ]
                                                                  │
                                      ┌───────────────────────────┴───────────────────────────┐
                                      ▼                                                       ▼
                          [ Isolation Forest ]                                  [ Deep Autoencoders ]
                          (Unsupervised Outliers)                              (Reconstruction Error)
                                      │                                                       │
                                      └───────────────────────────┬───────────────────────────┘
                                                                  ▼
                                                   [ Anomaly Score Thresholding ]
                                                                  ▼
                                                      [ SOC Alert Dispatch ]
```

### Unsupervised Model Ensemble
1. **Isolation Forest**: Efficiently isolates rare outlier log signatures across high-dimensional feature spaces.
2. **Deep Autoencoders**: Neural network trained on normal user behavioral sequences. High reconstruction error flags anomalous activity (e.g. impossible travel, unusual time-of-day access).

---

## 🛠️ Tooling & Infrastructure

- **Languages:** Python
- **Deep Learning:** TensorFlow / Keras (Autoencoder Architecture)
- **Machine Learning:** Scikit-Learn (Isolation Forest)
- **Data Engineering:** Elasticsearch, NoSQL, Pandas, NumPy
