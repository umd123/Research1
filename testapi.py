
res = requests.post(
    "https://research1.onrender.com",
    json={
        "query": "Metas latest products and news"
    }
).json()

print(res)

