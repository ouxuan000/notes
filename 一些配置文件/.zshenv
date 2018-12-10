#typeset -U path
#path=(~/bin /other/things/in/path $path[@])

export EDITOR=vim

#java环境变量
export JAVA_HOME=/home/lx7ly/applications/jdk
export JRE_HOME=${JAVA_HOME}/jre    
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib    
export PATH=${JAVA_HOME}/bin:$PATH 

#Oracle
#这个写你后头要安装的路径
#export ORACLE_BASE=/oracle
#export ORACLE_HOME=/oracle/product/db
#数据库的sid
#export ORACLE_SID=orcl
#export ORACLE_INVENTORY=/oracle/inventory
#export ORACLE_BASE ORACLE_SID ORACLE_HOME
#export ORACLE_UNQNAME=orcl
#
#环境变量
#export PATH=$ORACLE_HOME/bin:$PATH
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/home/lx7ly/applications/instantclient_12_2
export EDITOR=vim
export VISUAL=vim

#maven
export M2_HOME=/opt/maven
#export MAVEN_OPTS=-Xms128m -Xmx512m
export PATH=$PATH:${M2_HOME}/bin/;

#svn svn_editor
#export SVN_EDITOR=vim

#imagemagick
#export MAGICK_HOME=/home/tt/applications/ImageMagick-6.7.0
#export PATH=$PATH:${MAGICK_HOME}/bin;
#export LD_LIBRARY_PATH="${LD_LIBRARY_PATH:+$LD_LIBRARY_PATH:}$MAGICK_HOME/lib

#sqldeveloper
#export PATH=/home/lx7ly/application/sqldeveloper:$PATH

#export IDEA_JDK="$JAVA_HOME"
