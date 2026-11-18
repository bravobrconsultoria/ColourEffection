# DreamHost deployment setup

Target: dh_f6ctky@vps46513.dreamhostps.com:22
Directory: /home/dh_f6ctky/coloureffectionpainting.co.nz

Workflow prepared locally. Before pushing, enable shell access for this user, install a dedicated deployment public key in its ~/.ssh/authorized_keys and save the corresponding private key in GitHub Actions repository secret DREAMHOST_SSH_KEY. Never commit private keys.

DREAMHOST_KNOWN_HOSTS must contain the server public host key line, with fingerprint verified against DreamHost or an already trusted connection. Do not disable host verification or trust unverified ssh-keyscan output.

The workflow builds and tests, backs up the existing directory outside the web root, then uploads dist via rsync without deleting unrelated remote files. Backups require periodic housekeeping. Updates are not fully atomic. GitHub pushes only deploy once this setup is complete and the workflow is pushed.

Before using the new domain as production canonical, update business.url and sitemap-related tests from the former domain. Confirm HTTPS and root/www preference first.
