import React, { useEffect, useState } from 'react';
import { Container, Postform } from '../Components';
import service from '../AppWrite/config';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function EditPost() {
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                }
            });
        } else {
            navigate('/');
        }
    }, [slug, navigate]);
    return post ? (
        <div className="py-8">
            <Container>
                <Postform post={post} />
            </Container>
        </div>
    ) : null;
}

export default EditPost;
