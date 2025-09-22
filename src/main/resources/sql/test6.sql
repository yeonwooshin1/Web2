drop database if exists test6;
create database test6;
use test6;

create table movieList(
	mno int auto_increment , 		-- pk
    director varchar(30) not null ,  -- 감독
    title varchar(30) not null ,	 -- 영화제목
    genre varchar(30) not null ,	-- 장르
    introduction varchar(200) not null , -- 간단한 소개
    password varchar(30) not null ,		-- 간단한 비밀번호 
    constraint primary key(mno)			-- pk 
);

create table commentList(
	cno int auto_increment , 			-- pk 
    comment varchar(200) not null ,     -- 소개글 
    password varchar(30) not null,		-- 비밀번호
    mno int not null ,			-- fk
    
    constraint primary key(cno),			-- pk
	constraint foreign key (mno) references movieList(mno)	-- 참조 FK
);


select * from movieList;
select * from commentList;