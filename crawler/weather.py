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

weather_html = open('./crawler/weather_html.txt',encoding = "utf-8",mode = "w")

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
    global result
    global json_1
    result = '['

    shop_list = open('./crawler/weather_days_information.json',encoding = "utf-8",mode = 'w')

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
        result = result
        if(i==2):
            result = result + '{"title" : "' + title + '", "temperature" : "' + content + '"}'
        else:
            result = result + '{"title" : "' + title + '", "temperature" : "' + content + '"},'


        
        '''
        time.sleep(randint(1,3))
        clear_output()
        print (i)
        sys.stdout.flush()
        '''
    result = result + ']'
    result = json.dumps(result)
    json_1 = json.loads(result)
    print(json_1)
    shop_list.write(json_1)
    shop_list.close()



def funcname():

    links = 'http://www.cwb.gov.tw/V7/forecast/taiwan/inc/city/Yunlin_County.htm'
    res = requests.get(links)
    res.encoding = 'utf-8'
    global result
    global json
    result = '['
    shop_list = open('./crawler/weather_week.json',encoding = "utf-8",mode = 'w')

    soup = BeautifulSoup(res.text.encode("utf-8"),'html.parser')
    week_weather = soup.find('table',{'class':'FcstBoxTable01'})
    week_weather = week_weather.find('thead')
    week_weather = week_weather.select('th')
    #print(result)
    #print('---------------')

    week_weather_content = soup.find('table',{'class':'FcstBoxTable01'})
    week_weather_content = week_weather_content.find('tbody')
    week_weather_content = week_weather_content.find_all('tr')[0]
    week_weather_content = week_weather_content.find_all('td')
    print(len(week_weather))
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
        
        try:
            img = week_weather_content[i].img['title']
        except Exception as e:
            img = ""
        #print(img)


        #print(content)
        if(content == ""):
            pass
        else:
            #result = title + " : " + content
            #result = result + '"' + title + '":"' + content + '",'
            if(i==6):
                result = result + '{"data" : "' + title + '", "temperature" : "' + content + '", "img" : "' + img + '"}'
            else:
                result = result + '{"data" : "' + title + '", "temperature" : "' + content + '", "img" : "' + img + '"},'
        #print(result)
    result = result + ']'
    result = json.dumps(result)
    json = json.loads(result)
    print(json)
    shop_list.write(json)
    shop_list.close()

    

weather_days_information();
funcname();



