import React   from 'react';
import Mozaik  from 'mozaik/browser';
import jenkins from 'mozaik-ext-jenkins';
import bitbucket   from 'mozaik-ext-bitbucket';
import jira from 'mozaik-ext-jira';


const MozaikComponent = Mozaik.Component.Mozaik;
const ConfigActions   = Mozaik.Actions.Config;


Mozaik.Registry.addExtensions({
    jenkins,
    bitbucket,
    jira,
});

React.render(<MozaikComponent/>, document.getElementById('mozaik'));

ConfigActions.loadConfig();
