## 索引

  > 索引是对数据库表中一列或多列的值进行排序的一种结构，使用索引可快速访问数据库表中的特定信息。如果想按特定职员的姓来查找他或她，则与在表中搜索所有的行相比，索引有助于更快地获取信息

  - 数据库表经常有一列或多列组合，其值唯一标识表中的每一行。该列称为表的主键。在数据库关系图中为表定义主键将自动创建主键索引，主键索引是唯一索引的特定类型

  - 索引是建立在数据库表中的某些列的上面。在创建索引的时候，应该考虑在哪些列上可以创建索引，在哪些列上不能创建索引。

```js
SELECT * FROM mytable WHERE category_id=1;
CREATE INDEX mytable_categoryid ON mytable (category_id);
ALTER TABLE mytable ADD INDEX name_city_age (name(10),city,age);
```
## 主键索引

它是一种特殊的唯一索引，不允许有空值。一般是在建表的时候同时创建主键索引：
```js
CREATE TABLE mytable(  
 
ID INT NOT NULL,   
 
username VARCHAR(16) NOT NULL,  
 
PRIMARY KEY(ID)  
 
);
```

- 优点：
1、提高数据检索效率，降低数据库的IO成本；
2、通过索引对数据进行排序，降低了数据排序的成本，降低了CPU的利用率；

- 缺点：
1、索引实际上也是一张表，索引会占用一定的存储空间；
2、更新数据表的数据时，需要同时维护索引表，因此，会降低insert、update、delete的速度；