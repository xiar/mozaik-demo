import Mozaik from 'mozaik';
import config from '../config';
import jenkins from 'mozaik-ext-jenkins/client';
import bitbucket from 'mozaik-ext-bitbucket/client';
import jira from 'mozaik-ext-jira/client';

const mozaik = new Mozaik(config);

mozaik.bus.registerApi('jenkins', jenkins);
mozaik.bus.registerApi('bitbucket', bitbucket);
mozaik.bus.registerApi('jira', jira);

mozaik.startServer();
