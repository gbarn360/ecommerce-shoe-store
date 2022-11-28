import pymongo

client = pymongo.MongoClient("mongodb+srv://admin:patel@sikewearcluster.r7rsoch.mongodb.net/?retryWrites=true&w=majority")
data = client.test.shoe

data.delete_one({"shoeName":"sucks"})
entry = data.find_one({"shoeName":"sucks"})
try:
    if( not entry):
        print("Delete Product : pass")
except Exception as e:
    print("Fail")