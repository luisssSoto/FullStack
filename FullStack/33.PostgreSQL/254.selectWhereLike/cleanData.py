import pandas

rc = pandas.read_csv("FullStack/33.PostgreSQL/254.selectWhereLike/world-food.csv")

df = pandas.DataFrame(rc)
print(df)

df.info()

print(rc.Rice.value_counts())
print(rc.describe())
