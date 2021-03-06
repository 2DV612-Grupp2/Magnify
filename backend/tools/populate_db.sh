#! /bin/bash

# Drop connections
node app.js account --drop # Drop accounts collection
node app.js company --drop # Drop companies collection
node app.js category --drop # Drop categories collection
node app.js product --drop # Drop products collection
node app.js material --drop # Drop materials collection
node app.js thread --drop # Drop thread collection
node app.js post --drop # Drop post collection

# Create companies
node app.js company -C -n AwesomeCorp
node app.js company -C -n EvilCorp

# Create accounts
node app.js account -C -u admin -p 1111 -r companyAdmin -c AwesomeCorp
node app.js account -C -u rep -p 2222 -r companyRep -c AwesomeCorp
node app.js account -C -u mrconsumer -p 3333 -r consumer

node app.js account -C -u evil_admin -p 1111 -r companyAdmin -c EvilCorp
node app.js account -C -u evil_rep -p 2222 -r companyRep -c EvilCorp

# Create Categories
node app.js category -C -n Vitvaror
node app.js category -C -n Trädgrådsprodukter

node app.js category -C -n Tvättmaskiner -p Vitvaror
node app.js category -C -n Diskmaskiner -p Vitvaror

node app.js category -C -n Gräsklippare -p Trädgrådsprodukter
node app.js category -C -n Lövblåsare -p Trädgrådsprodukter

#node app.js category -C -n Elektriska -p Gräsklippare
#node app.js category -C -n Bensindrivna -p Gräsklippare

# Create Products
node app.js product -C -n EvilCutter -c EvilCorp --maincategory Trädgrådsprodukter
node app.js product -C -n AwesomeCutter -c AwesomeCorp --maincategory Trädgrådsprodukter --subcategory Gräsklippare
node app.js product -C -n AwesomeTest -c AwesomeCorp 
node app.js product -C -n EvilTest -c EvilCorp --maincategory Vitvaror --subcategory Diskmaskiner
