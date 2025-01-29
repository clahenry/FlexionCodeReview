FROM amazonlinux:latest

# Install dependencies
RUN yum update -y && \
    yum install -y httpd && \
    yum search wget && \
    yum install wget -y && \
    yum install unzip -y

# change directory
RUN cd /var/www/html

# download webfiles
RUN wget https://github.com/clahenry/FlexionCodeReview/blob/main/Temp_Converter.zip

# unzip folder
RUN unzip Temp_Converter.zip

# copy files into html directory
RUN cp -r Temp_Converter/* /var/www/html/

# remove unwanted folder
RUN rm -rf Temp_Converter Temp_Converter.zip

# exposes port 80 on the container
EXPOSE 80

# set the default application that will start when the container start
ENTRYPOINT ["/usr/sbin/httpd", "-D", "FOREGROUND"]