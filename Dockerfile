FROM ubuntu
COPY ./build/pokemon-spotter-backend-linux ./
EXPOSE 3000
CMD [ "./pokemon-spotter-backend-linux" ]