# E-Commerce Server

## Table of Contents
- [Description](#description)
- [Usage](#usage)
- [Installation](#installation)
- [Credits](#credits)

## Description
This program is an e-commerce back end unconnected to a user-facing front end. It is a database with three interlinking tables, which you can query using various routes. This functionality is done via Express and Sequelize.

The three routes are `api/categories`, `api/tags`, and `api/products`. Each of those has two GET routes, one for getting all of the relevant data for that table, and the other, taking an `:id` parameter, to retrieve data on a specific entry. There is also a POST route, allowing you to enter in data of your choice to a specific table. See [below](#json-body-formatting) for how to format those requests. There is also a PUT and DELETE request, both taking an `:id` parameter, to update an entry or delete an entry, respectively.

This program was quite difficult for me to create. For one, I find starting with starter code significantly harder than not having any, and for two, I struggled a lot learing Sequelize. It doesn't come very natural to me, at all. I think I understand it a bit better now, but I have a few issues still in the program relating to foreign keys and column heading names. I'd like to fix those at a later date, if possible.

## Usage
A video demonstrating this program's use can be found [here]().

After following the [installation](#installation) instructions, run the `npm start` command. This will host the server at `http://localhost:5678`. You can then utilize the server using a program such as Insomnia.

### JSON Body Formatting
#### Category
##### POST and PUT
```
{
	"category_name":"Example Category"
}
```
#### Tag
##### POST and PUT
```
{
	"tag_name":"Example Tag"
}
```
#### Product
##### POST and PUT
```
{
	"product_name": "Example Product",
	"price": Decimal Value,
	"stock": Integer Value,
	"tagIds": [Array, of, Integers]
}
```

## Installation
1. Clone the repository to your local machine.
2. Take the `env.EXAMPLE` file and fill out the `DB_USER` and `DB_PASSWORD` fields with your SQL login information. Then rename the file to `.env`.
3. Navigate to the repository folder in your command line.
4. In your command line, login to MySQL with the command `mysql -uUSER -p`, replacing `USER` with your SQL username. You'll be prompted to enter your password. Enter it to continue.
5. In MySQL, run the command `SOURCE db/schema.sql`. Once it's finished, run `exit`.
6. Finally, run the `npm run seeds` command.

## Credits
Starter code was provided by the bootcamp, and the instructor also provided extra supplementary code to replace some of the starter files. This program uses the Express, dotenv, Sequelize, nodemon, and MySQL2 NPM packages.