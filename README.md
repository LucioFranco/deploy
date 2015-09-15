# deploy
Simple node deploy tool

# The Idea

* easily orchestrate deployments of node applications
* run all of it through ssh
* all through yaml
* use node 0.12 spawnSync

```
config:
  key: /path/to/key

servers:
  ns1: app@ns1.example.com
  ns2: app@ns2.example.com
  ns3: app@ns3.example.com

# These two run on the depolyer
pre_deploy:
  - echo "Starting deploy!"

pre_deploy_each:
  - scp #{server}:/path/to/build

# This code runs on the servers
deploy:
  - tar -xzf package.tgz
  - rm package.tgz
  - cd build
  - npm i --production
  - pm2 restart all

# This one is run on the depolyer
post_depoly:
  - echo "Done depolying!"

```
