import Accordion from "../components/Accordion";
const AccordionPage = () => {
    const items = [
        {
            id: 'dkf3',
            label: 'Can I use React on a project',
            content: 'You can use React on a project. You can use React on a project. You can use React on a project. You can use React on a project. You can use React on a project'
        },
        {
            id: 'sd2f',
            label : 'Can I use JavaScript on a project',
            content: 'You can use React on a project. You can use React on a project. You can use React on a project. You can use React on a project. You can use React on a project'
        },
        {
            id: 'df93',
            label: 'Can I use HTML on a project',
            content: 'You can use React on a project. You can use React on a project. You can use React on a project. You can use React on a project. You can use React on a project'
        }
    ]

    return <Accordion items={items}/>;
}

export default AccordionPage;