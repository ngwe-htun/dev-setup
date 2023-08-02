
### Install Docker, Compose plugin (Linux)

You can install different methods, but the following example will only describe how to install docker cli using official docker repository.
- [Reference](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)

1. Update the `apt` package index and install packages to allow `apt` to use a repository over HTTPS:

   ```
   sudo apt-get update
   sudo apt-get install ca-certificates curl gnupg
   ```

2. Add Docker’s official GPG key:
   ```
   sudo install -m 0755 -d /etc/apt/keyrings/
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
   sudo chmod a+r /etc/apt/keyrings/docker.gpg
   ```

3. Set up the repository:
   ```
   echo \
        "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
        "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
        sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```

4. Update the apt package index:
   ```
   sudo apt-get update
   ```

5. Install Docker Engine, containerd, and Docker Compose:
   ```
   sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
   ```

6. Verifying `docker` engine is running: 
   ```
   sudo systemctl status docker
   ● docker.service - Docker Application Container Engine
     Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
     Active: active (running) since Thu 2023-07-20 10:03:24 +0630; 3h 37min ago
   TriggeredBy: ● docker.socket
       Docs: https://docs.docker.com
   Main PID: 1498 (dockerd)
      Tasks: 25
     Memory: 136.5M
        CPU: 2.998s
     CGroup: /system.slice/docker.service
             └─1498 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock
   ```

### Linux post-installation steps for Docker Engine

1. Add your user to the docker group.
   ```
   sudo usermod -aG docker $USER
   ```

2. Reboot system
   ```
   sudo reboot now
   ```
*You're ready to go. You can use docker commands without `sudo` now*

### Verification
1. Check `docker` version
   ```
   docker --version
   Docker version 24.0.4, build 3713ee1
   ```
2. Check `docker compose` version
   ```consoole
   docker compose version
   Docker Compose version v2.19.1
   ```
