import 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoadingIcon = () => (
    <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
        </div>
    </div>
);

export default LoadingIcon;
