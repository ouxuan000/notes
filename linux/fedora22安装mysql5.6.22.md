1. 复制mysql安装包到安装目录

[root@localhost opt]# mkdir mysql[root@localhost opt]# cp /home/duke147/Desktop/Tools/MySQL-5.6.22-1.linux_glibc2.5.i386.rpm-bundle.tar /opt/mysql/[root@localhost opt]# cd mysql/[root@localhost mysql]# ls -a .  ..  MySQL-5.6.22-1.linux_glibc2.5.i386.rpm-bundle.tar


2. 解压安装包

[root@localhost mysql]# tar xvf MySQL-5.6.22-1.linux_glibc2.5.i386.rpm-bundle.tar
            MySQL-test-5.6.22-1.linux_glibc2.5.i386.rpm #MySQL的测试组件
            MySQL-shared-5.6.22-1.linux_glibc2.5.i386.rpm  #MySQL的共享库             
            MySQL-shared-compat-5.6.22-1.linux_glibc2.5.i386.rpm #MySQL版本兼容的包       
            MySQL-client-5.6.22-1.linux_glibc2.5.i386.rpm  #MySQL客户端程序             
            MySQL-devel-5.6.22-1.linux_glibc2.5.i386.rpm #MySQL的库和头文件               
            MySQL-embedded-5.6.22-1.linux_glibc2.5.i386.rpm #MySQL的嵌入式程序             
            MySQL-server-5.6.22-1.linux_glibc2.5.i386.rpm #MySQL服务端程序               
           
3.安装服务端

[root@localhost mysql]# rpm -ivh MySQL-server-5.6.22-1.linux_glibc2.5.x86_64.rpm

4.安装客户端

[root@localhost mysql]# rpm -ivh MySQL-client-5.6.22-1.linux_glibc2.5.x86_64.rpm

MySQL默认安装路径：

a.数据库目录：    /var/lib/mysql/
b.配置文件：    /usr/share/mysql
c.相关命令：    /usr/bin
d.启动脚本：    /etc/rc.d/init.d/

5.修改配置文件，将MySQL的配置文件拷贝到/etc目录下。

[root@localhost mysql]# cp /usr/share/mysql/my-default.cnf /etc/my.cnf


#如果使用默认配置，则不需要进行修改
[root@localhost mysql]# vi /etc/my.cnf

6.初始化MySQL

[root@localhost mysql]# /usr/bin/mysql_install_db


7.启动MySQL

[root@localhost mysql]# service mysql startStarting MySQL.... SUCCESS!


检测mysql 3306是否安打开

[root@localhost mysql]# netstat -nattcp        0      0 :::3306                    :::*                        LISTEN 


8.查看root账号初始信息

[root@localhost mysql]# cat /root/.mysql_secret# The random password set for the root user at Thu Dec 18 21:08:44 2014 (local time): vuN8xfuKTRnmqX3I


9.使用默认密码登陆mysql

[root@localhost mysql]# mysql -u root -pvuN8xfuKTRnmqX3I

修改默认密码：

mysql> set password = password('123456');

退出mysql

mysql> quit;Bye


10.添加自启动服务

[root@localhost ~]# chkconfig --add mysql[root@localhost ~]# chkconfig mysql on


11.配置远程访问

mysql> GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '123456' WITH GRANT OPTION;Query OK, 0 rows affected (0.01 sec)


刷新权限

mysql> flush privileges;Query OK, 0 rows affected (0.00 sec)


配置单个IP访问权限，*.* 指 【数据库.表】：

mysql > GRANT ALL PRIVILEGES ON *.* TO 'root'@'192.168.1.56' IDENTIFIED BY '123456' WITH GRANT OPTION;flush privileges;


关闭防火墙

[root@localhost ~]# service iptables stopiptables: Flushing firewall rules:                        [  OK  ]iptables: Setting chains to policy ACCEPT: filter          [  OK  ]iptables: Unloading modules:                              [  OK  ][root@localhost ~]# service iptables statusiptables: Firewall is not running.


修改密码

mysql> use mysql;mysql> update user set password=password('123456') where user='root';mysql> flush privileges;


查看数据库

mysql> show databases;+--------------------+| Database          |+-----
