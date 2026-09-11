import React from 'react';
import { PageType, Language } from '../types';
import { MainPortfolioPage } from './MainPortfolioPage';

interface AboutPageProps {
  onSelectPage: (page: PageType) => void;
  currentLanguage: Language;
  onOpenResume?: () => void;
  onSelectProject?: (projectId: string) => void;
  onOpenArticle?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ 
  onSelectPage, 
  currentLanguage,
  onOpenResume,
  onSelectProject,
  onOpenArticle
}) => {
  return (
    <MainPortfolioPage
      onSelectPage={onSelectPage}
      currentLanguage={currentLanguage}
      onOpenResume={onOpenResume}
      onOpenArticle={onOpenArticle ? onOpenArticle : () => onSelectPage('article')}
      onSelectProject={onSelectProject}
    />
  );
};
