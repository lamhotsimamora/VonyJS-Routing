function goTo(value) {
    Vony({
        urlRoute: value + '.html',
        title: value + ' | Welcome to Vony JS'
    }).route(() => {
        
        let final_template='';
        let final_value = value.toLowerCase();

        switch (final_value) {
            case 'index':
                final_template = template_index;
                break;
            case 'profile':
                final_template = template_profile;
                break;
            case 'contact':
                final_template = template_contact;
                break;
            case 'login':
                final_template = template_login;
                break;
            case 'register':
                final_template = template_register;
                break;
            default:
                break;
        }

        Vony({
            id: 'content'
        }).set(final_template)

    });
}