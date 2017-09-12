import requests
from bs4 import BeautifulSoup
import HTMLParser
import time
from random import randint
import sys
from IPython.display import clear_output

langs = []
links = 'https://weather.com/weather/tenday/l/TWXX0070:1:TW'

weather_html = open('weather_html.txt', encoding="utf-8", mode="w")

res = requests.get(links)
res.encoding = 'utf-8'
weather_html.write(res.text)

weather_html.close()
# -----------------------------------------------------------------------------
soup = BeautifulSoup(res.text.encode("utf-8"), 'html.parser')
news_table = soup.find('main', {'class': 'region region-main'})
news_table = news_table.find('table', {'class': 'twc-table'})
news_table = news_table.find('tbody')
news_table = news_table.find_all('tr')


shop_list = open('weather.txt', encoding="utf-8", mode='w')

for i in range(0, len(news_table)):
    try:
        day = news_table[i].find('span', {'class': 'date-time'}).string
    except Exception as e:
        day = ""
    try:
        date = news_table[i].find(
            'span', {'class': 'day-detail clearfix'}).string
    except Exception as e:
        date = ""
    try:
        description = news_table[i].find(
            'td', {'class': 'description'})
        description = description.find('span').string
    except Exception as e:
        description = ""
    try:
        temp = news_table[i].find(
            'td', {'class': 'temp'})
        temp = temp.find('span',{'class':''})
        
        

        #temp = temp.split('<sup>')

    except Exception as e:
        temp = ""

    result = day + ' : ' + date + ' : ' + description
    print(temp)
    try:
        shop_list.write(result + '\n')
    except Exception as e:
        print ('pass')
    sys.stdout.flush()
shop_list.close()
