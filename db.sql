-- create users table
create table users (
  email varchar(255) primary key,
  created_at timestamp default now()
);

-- excercises
select email, date_format(created_at, "%M %D %Y") from users order by created_at asc limit 1;

select monthname(created_at) as month, count(*) as total from users group by month order by total desc;

select 'yahoo domain', count(*) as total from users where email LIKE '%yahoo%';