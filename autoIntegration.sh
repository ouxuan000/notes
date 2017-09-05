#!/bin/sh
#持续集成脚本
#更新支付代码
svn update /home/lx7ly/Oracle/Middleware/user_projects/app/ifmis_dev
#更新codetag代码
svn update /home/lx7ly/Documents/codetag/21-bdg
#复制支付代码到codetag目录
cp -Ru /home/lx7ly/Oracle/Middleware/user_projects/app/ifmis_dev/BDG /home/lx7ly/Documents/codetag/21-bdg/V2_0_1_0/code
cp -Ru /home/lx7ly/Oracle/Middleware/user_projects/app/ifmis_dev/WebRoot/bdg /home/lx7ly/Documents/codetag/21-bdg/V2_0_1_0/code/WebRoot
#要更新的代码放入到文件中
svn status /home/lx7ly/Documents/codetag/21-bdg > /home/lx7ly/Documents/codetag_`date "+%Y%m%d%H%M%S"`.txt
#添加新提交的文件
svn status /home/lx7ly/Documents/codetag/21-bdg |grep '\?'|tr '\?' ' '|sed 's/\ //g'|xargs svn add
#提交svn
svn commit -m "" /home/lx7ly/Documents/codetag/21-bdg
