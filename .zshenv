#typeset -U path
#path=(~/bin /other/things/in/path $path[@])

export EDITOR=vim

#java环境变量
export JAVA_HOME=/home/lx7ly/application/jdk
export JRE_HOME=${JAVA_HOME}/jre    
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib    
export PATH=${JAVA_HOME}/bin:$PATH 

#Oracle
#这个写你后头要安装的路径
#export ORACLE_BASE=/home/tt/app/tt
#export ORACLE_HOME=${ORACLE_BASE}/product/11.2.0/dbhome_1
#数据库的sid
#export ORACLE_SID=orcl
#export ORACLE_UNQNAME=orcl
#环境变量
#export PATH=$PATH:${ORACLE_HOME}/bin/;

#maven
#export M2_HOME=/home/tt/applications/apache-maven
#export MAVEN_OPTS=-Xms128m -Xmx512m
#export PATH=$PATH:${M2_HOME}/bin/;

#svn svn_editor
#export SVN_EDITOR=vim

#imagemagick
#export MAGICK_HOME=/home/tt/applications/ImageMagick-6.7.0
#export PATH=$PATH:${MAGICK_HOME}/bin;
#export LD_LIBRARY_PATH="${LD_LIBRARY_PATH:+$LD_LIBRARY_PATH:}$MAGICK_HOME/lib


