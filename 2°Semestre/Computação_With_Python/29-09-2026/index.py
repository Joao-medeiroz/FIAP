import requests
import pandas as pd
import matplotlib.pyplot as plt

URL_BASE = "https://api.bcb.gov.br/dados/serie/bcdata.sgs.{codigo}/dados"

params = {
    "formato": "json",
    "dataInicial": "01/01/2019",
    "dataFinal": "31/12/2025",
}

rest = requests.get(URL_BASE.format(codigo = 433), params=params, timeout=10)
rest.raise_for_status()
dados = rest.json()

ipca = pd.DataFrame(dados)

ipca["data"] = pd.to_datetime(ipca["data"], format="%d/%m/%Y")
ipca["valor"] = pd.to_numeric(ipca["valor"])
ipca.info()

series = {
    "ipca": 433,          # inflação oficial do mês (%)
    "igpm": 189,          # IGP-M do mês (%)
    "selic": 4390,        # Selic acumulada no mês (%)
    "dolar": 3698,        # dólar comercial – média do mês (R$)
    "desemprego": 24369,  # taxa de desocupação (%)
}


tabelas = []
for nome, codigo in series.items():
    resp = requests.get(URL_BASE.format(codigo=codigo), params=params, timeout=30)

    parcial = pd.DataFrame(resp.json())
    parcial["data"] = pd.to_datetime(parcial["data"], format="%d/%m/%Y")
    parcial[nome] = pd.to_numeric(parcial["valor"])

    tabelas.append(parcial[["data", nome]].set_index("data"))
print(tabelas)

df = pd.concat(tabelas, axis=1).reset_index()

df["ano"] = df["data"].dt.year
df["mes"] = df["data"].dt.month

df.to_excel('dados_excel.xlsx')
