import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import List from "../components/List";
import Link from '../components/Link';
import './ProjectDetail.css';

function ProjectDetail({ userName }) {
    const [loading, setLoading] = useState(true);
    const [project, setProject] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        async function fectchData() {
            const data = await fetch(`https://api.github.com/repos/${userName}/${name}`);
            const result = await data.json();

            if (result) {
                setProject(result);
                setLoading(false);
            }
        }

        if (userName && name) fectchData();
    }, [userName, name]);

    const items = [
        { field: 'created at', value: project.created_at },
        { field: 'updated at', value: project.updated_at },
        { field: 'language', value: project.language },
        {
            field: 'html_url',
            value: <Link url={project.html_url} title={project.html_url} />,
        },
        { field: 'description', value: project.description },
    ];

    return (
        <div className='Project-container'>
            <h2>Project: {project.name}</h2>
            {loading ? (
                <span>Loading...</span>
            ) : (
                <div>
                    <List items={items} />
                </div>
            )}
        </div>
    );
}

export default ProjectDetail;