import React, { ReactNode, Suspense } from 'react';
import { ErrorInfo } from 'react-dom/client';
import { ErrorPage } from '@/widget/ErrorPage';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return (
                <Suspense fallback=''>
                    <ErrorPage />
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
