import pandas
# Note: csv -> Comma Separated Values
'''Countries'''

data = pandas.read_csv('FullStack/33.PostgreSQL/capitals.csv')
print(data)
print(data.head())
print(data.info())
print()

'''Flags'''
flags = pandas.read_csv('FullStack/33.PostgreSQL/flags.csv')
print(f' flags: {flags}')
print(f'Showing the first 5 registers {flags.head()}')
print('Showing more details about flags:')
flags.info()