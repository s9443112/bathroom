import requests
from bs4 import BeautifulSoup
import HTMLParser
import time
from random import randint
import sys
from IPython.display import clear_output
import json

langs = []
links = 'http://www.cwb.gov.tw/V7/forecast/taiwan/Yunlin_County.htm'

weather_html = open('weather_html.txt',encoding = "utf-8",mode = "w")

res = requests.get(links)
res.encoding = 'utf-8'
weather_html.write(res.text)

weather_html.close()
##-----------------------------------------------------------------------------


def weather_days_information():
    soup = BeautifulSoup(res.text.encode("utf-8"),'html.parser')
    news_table = soup.find('table',{'class':'FcstBoxTable01'})
    news_table = news_table.find('tbody')
    news_table = news_table.find_all('tr')


    shop_list = open('weather_days_information.txt',encoding = "utf-8",mode = 'w')

    print(len(news_table))
    for i in range(0,len(news_table)):
        try:
            title = news_table[i].find('th',{'scope':'row'}).string
        except Exception as e:
            title = ""
        try:
            content = news_table[i].find_all('td')[0].string
        except Exception as e:
            content = ""

        result = title + " : " + content

        try:
            shop_list.write(result+'\n')
        except Exception as e:
            print ('pass')
        '''
        time.sleep(randint(1,3))
        clear_output()
        print (i)
        sys.stdout.flush()
        '''
    shop_list.close()



def funcname():

    links = 'http://www.cwb.gov.tw/V7/forecast/taiwan/inc/city/Yunlin_County.htm'
    res = requests.get(links)
    res.encoding = 'utf-8'
    global result
    global json
    result = '['
    shop_list = open('weather_week.json',encoding = "utf-8",mode = 'w')

    soup = BeautifulSoup(res.text.encode("utf-8"),'html.parser')
    week_weather = soup.find('table',{'class':'FcstBoxTable01'})
    week_weather = week_weather.find('thead')
    week_weather = week_weather.select('th')
    print(result)
    print('---------------')

    week_weather_content = soup.find('table',{'class':'FcstBoxTable01'})
    week_weather_content = week_weather_content.find('tbody')
    week_weather_content = week_weather_content.find_all('tr')[0]
    week_weather_content = week_weather_content.find_all('td')
    #print(len(week_weather))
    #print(week_weather)
    for i in range(0,len(week_weather)):
        try:
            title = week_weather[i+1].text
        except Exception as e:
            title = ""
        try:
            content = week_weather_content[i].text.replace('\n\n				   ', '')
        except Exception as e:
            content = ""
        
        #print(content)
        if(content == ""):
            pass
        else:
            #result = title + " : " + content
            #result = result + '"' + title + '":"' + content + '",'
            result = result + '{"data" : "' + title + '", "temperature" : "' + content + '"},'
        #print(result)
    result = result + ']'
    result = json.dumps(result)
    json = json.loads(result)
    print(json)
    shop_list.write(json+'\n')
    shop_list.close()

    

weather_days_information();
funcname();





'''
shop_table = soup.find('div',{'id':'hothala'})
shop_table = shop_table.find('table',{'class':'EXA8'})
shop_table = shop_table.find_all('tr')


shop_list = open('get_html.txt',encoding = "utf-8",mode = 'w')
##建立變項檔案的header
title = "排名， 哪一版， 主題， 響應 \n"
shop_list.write(title)
##先把header寫進去


for i in range(1,len(shop_table)):
    try:
        rate = shop_table[i].find_all('span')[0].string
    except Exception as e:
        rate = ""
    ##做例外處理

    try:
        board = shop_table[i].find('a',{'class':'style2'}).string
    except Exception as e:
        board = ""
    try:
        theme = shop_table[i].find_all('a')[1].string
    except Exception as e:
        theme = ""

    try:
        respo = shop_table[i].find_all('td')[3].string
    except Exception as e:
        respo = ""
    ##串起來用逗號分格（應該有更好的方法，但是先將就用用）
    result = rate + ".  " + board + "   :   " + theme + "   #    " + respo
    try:
        shop_list.write(result+'\n')
    except Exception as e:
        print ('pass')
    time.sleep(randint(1,3))
    clear_output()
    print (i)

    sys.stdout.flush()

shop_list.close()
'''