# 🚘 Machine Learning-Based Vehicle Performance Analyzer

[![Python](https://img.shields.io/badge/Python-3.9+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![Flask](https://img.shields.io/badge/Flask-2.0+-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com)
[![Scikit-Learn](https://img.shields.io/badge/Scikit_Learn-1.0+-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white)](https://scikit-learn.org)
[![Accuracy](https://img.shields.io/badge/R%C2%B2_Score-0.91-00F2FE?style=for-the-badge)](#-model-evaluation--results)

An end-to-end Machine Learning web application designed to forecast vehicle performance telemetry indicators based on multi-parameter engine sensor inputs. Built with **Random Forest Regression** and deployed via a responsive **Flask** web application.

---

## 🌟 Key Features

- 🏎️ **Multi-Parameter Engine Telemetry Ingestion**: Processes metrics such as RPM, torque, fuel consumption rate, thermal indicators, and air intake pressure.
- 🌲 **Optimized Ensemble Model**: Random Forest Regressor fine-tuned via Grid Search CV.
- 🎯 **High Accuracy**: Attained an **$R^2$ score of 0.91** (91% variance explained).
- 🌐 **Interactive Flask UI**: Web interface allowing real-time input sliders and immediate performance predictions.

---

## 📊 Model Evaluation & Results

| Metric | Score |
| :--- | :--- |
| **$R^2$ Score** | **0.91** |
| **Mean Absolute Error (MAE)** | `0.042` |
| **Root Mean Squared Error (RMSE)** | `0.068` |

---

## 🛠️ Tech Stack & Architecture

```
[ Engine Parameters Input ] ➔ [ Data Preprocessing & Scaling ] ➔ [ Random Forest Regressor ] ➔ [ Flask Web App ] ➔ [ UI Output ]
```

- **Core Engine:** Python 3.9+
- **Data Engineering:** Pandas, NumPy
- **Machine Learning:** Scikit-Learn (RandomForestRegressor, StandardScaler, TrainTestSplit)
- **Deployment:** Flask, HTML5, CSS3, JavaScript

---

## 🚀 Quick Start Guide

```bash
# 1. Clone the repository
git clone https://github.com/Rohit-Jha-D/Vehicle-Performance-Analyzer.git
cd Vehicle-Performance-Analyzer

# 2. Install dependencies
pip install -r requirements.txt

# 3. Run Flask application
python app.py
```
Open `http://127.0.0.1:5000` in your web browser.
