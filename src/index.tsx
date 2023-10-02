import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { App } from '@/app/App';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import 'app/styles/index.scss';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { AppAuthContextProvider } from '@/shared/context/appAuthModalContext';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <AppAuthContextProvider>
                        <App />
                    </AppAuthContextProvider>
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>
);
