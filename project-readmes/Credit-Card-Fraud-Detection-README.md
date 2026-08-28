# 💳 Credit Card Fraud Detection using Data Science Techniques

[![Python](https://img.shields.io/badge/Python-3.9+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![Scikit-Learn](https://img.shields.io/badge/SVM-Classifier-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white)](https://scikit-learn.org)
[![F1-Score](https://img.shields.io/badge/F1_Score-0.92-7928CA?style=for-the-badge)](#-performance-metrics)

An automated financial fraud classification pipeline utilizing **Support Vector Machines (SVM)**, advanced feature engineering, and class-imbalance resolution techniques (SMOTE).

---

## 📌 Problem Overview

Financial fraud detection faces a severe **class imbalance problem**, where fraudulent transactions account for less than 0.2% of total transactions. Standard classification accuracy fails to evaluate performance; therefore, this project optimizes for **Precision, Recall, and F1-Score**.

---

## 🔬 Methodology & Workflow

1. **Exploratory Data Analysis (EDA)**: Analyzed PCA-transformed feature distributions ($V_1$ through $V_{28}$) and transaction amounts.
2. **Class Imbalance Handling**: Applied **SMOTE (Synthetic Minority Over-sampling Technique)** to balance fraud training instances.
3. **Feature Selection**: Utilized correlation heatmaps and mutual information scores to isolate high-signal predictors.
4. **Model Tuning**: Hyperparameter tuning on **Support Vector Machines (SVM)** with RBF Kernel.

---

## 📈 Performance Metrics

| Metric | Score |
| :--- | :--- |
| **F1-Score** | **0.92** |
| **Precision** | `0.94` |
| **Recall** | `0.90` |
| **ROC-AUC** | `0.97` |

---

## 🛠️ Project Structure

```
├── data/               # Transaction dataset (PCA Features V1-V28, Amount, Class)
├── notebooks/          # Exploratory analysis & SMOTE experimentations
├── src/                # Modular Python preprocessing & inference pipeline
├── models/             # Serialized SVM model (.pkl)
└── requirements.txt    # Python package dependencies
```

---

## ⚡ Installation & Execution

```bash
git clone https://github.com/Rohit-Jha-D/Credit-Card-Fraud-Detection.git
cd Credit-Card-Fraud-Detection
pip install -r requirements.txt
python src/train_eval.py
```
