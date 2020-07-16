import requests
from bs4 import BeautifulSoup
import certifi, urllib3
import json

requests.urllib3.disable_warnings()
#action = Block a user
def wikiapi_test1():

	url = "https://www.mediawiki.org/w/api.php?action=centralnoticechoicedata&project=wikipedia&language=en&format=json"
	session = requests.Session()
	session.headers = {"User-Agent": "Googlebot/2.1 (+http://www.google.com/bot.html)"}

	content = session.get(url, verify=False).content
	soup = BeautifulSoup(content, "html.parser")

	'''
	# saving to local file 
	try:

		with open("wiki.json", "a+") as f:
			f.write(str(soup))
		f.close()
	except Exception as err:
		print(err)
		'''

	f = open('wiki.json')
	data = json.load(f)
	f.close()

	for x in data.values():	
		for y in x[0]:
			print("\n", "name : " ,x[0]['name'])
			print("\n", "start : " ,x[0]['start'])
			print("\n", "end : " ,x[0]['end'])
			print("\n", "preferred : " ,x[0]['preferred'])
			print("\n", "throttle : " ,x[0]['throttle'])
			print("\n", "bucket_count : " ,x[0]['bucket_count'])
			print("\n", "geotargeted : " ,x[0]['geotargeted'])
			for dic1 in x[0]['banners']: # is a list of 3 dicts
				print("\n", "name : ",dic1['name'])
				print("\n", "bucket : ",dic1['bucket'])
				print("\n", "weight : ",dic1['weight'])
				print("\n", "category : ",dic1['category'])
				print("\n", "category : ",dic1['category'])
				print("\n", "display_anon : ",dic1['display_anon'])
				for c in dic1['devices']:
					print("\n"," ",c)
			print("\n Contries", x[0]['countries'])
			for k,v in x[0]['mixins'].items():
				print("\n ",k," -- ")
				for k2,v2 in v.items():
					print("\n",k2," : ",v2)
										
	



def decode_json():
	f = open('wiki.json')
	data = json.load(f)
	f.close()

	for x in data.values():
		for count in range(len(x)):
			print("\n", "name : " ,x[count]['name'])
			print("\n", "start : " ,x[count]['start'])
			print("\n", "end : " ,x[count]['end'])
			print("\n", "preferred : " ,x[count]['preferred'])
			print("\n", "throttle : " ,x[count]['throttle'])
			print("\n", "bucket_count : " ,x[count]['bucket_count'])
			print("\n", "geotargeted : " ,x[count]['geotargeted'])
			for dic1 in x[count]['banners']: # is a list of 3 dicts
				print("\n", "name : ",dic1['name'])
				print("\n", "bucket : ",dic1['bucket'])
				print("\n", "weight : ",dic1['weight'])
				print("\n", "category : ",dic1['category'])
				print("\n", "category : ",dic1['category'])
				print("\n", "display_anon : ",dic1['display_anon'])
				for c in dic1['devices']:
					print("\n"," ",c)
			print("\n Contries", x[count]['countries'])
			for k,v in x[count]['mixins'].items():
				print("\n ",k," -- ")
				for k2,v2 in v.items():
					print("\n",k2," : ",v2)






if __name__ == '__main__':
	decode_json()
	
			
	






