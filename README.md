# business-logs(docker化)

### 业务监控v0.1

#### 背景：

> 在业务开发的测试环节过程中，多用户进行测试的时候，出现了错误需要采用复现的形式来定位是前端问题还是后端问题，如果前端也在测试环境预埋日志，那么就可以根据该用户的信息进行那次异常信息的找回



#### 运行：

> 目前代码经过测试已经可以在docker上运行，目前打镜像和运行已经写在sh上，半自动化运行

- sh build.sh
- sh start.sh
