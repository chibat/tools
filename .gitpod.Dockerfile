FROM gitpod/workspace-full

# Install custom tools, runtimes, etc.
# For example "bastet", a command-line tetris clone:
# RUN brew install bastet
#
# More information: https://www.gitpod.io/docs/config-docker/

ENV DENO_DIR=/workspace/.deno
ENV DENO_INSTALL=$HOME/.deno
ENV PATH=$DENO_INSTALL/bin:$PATH

RUN curl -fsSL https://deno.land/x/install/install.sh | sh -s v1.9.2



