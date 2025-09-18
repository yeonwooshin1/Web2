drop database if exists task5;
create database task5;
use task5;

create table userNumberList(
	id int auto_increment , 
    userName varchar(30) not null ,
    userNumber varchar(30) not null ,
    userAge int not null ,
    constraint primary key(id)
);


select * from userNumberList;