import React from 'react';

type HighlightProps = {
    text: React.ReactNode;
    keywords: string[];
    highlightClass?: string;
};

const highlightText = (text: string, keywords: string[], highlightClass: string = 'bg-amber-200') => {
    if (!keywords || keywords.length === 0) return text;
    const _keywords = keywords.filter(keyword => !!keyword && keyword.length > 0).map(keyword => keyword.toLowerCase());
    const _text = text.toLowerCase();

    const regex = new RegExp(`(${_keywords.join('|')})`, 'gi');
    const parts = _text.split(regex);

    return parts.map((part, index) => (
        regex.test(part) ? <span key={index} className={highlightClass}>{part}</span> : part
    ));
};

const extractText = (node: React.ReactNode): string => {
    if (typeof node === 'string') return node;
    if (Array.isArray(node)) return node.map(extractText).join('');
    if (React.isValidElement(node) && node.props.children) return extractText(node.props.children);
    return '';
};

export const HighlightContent: React.FC<HighlightProps> = ({text, keywords, highlightClass}) => {
    const highlightNode = (node: React.ReactNode): React.ReactNode => {
        if (typeof node === 'string') {
            return highlightText(node, keywords, highlightClass);
        }
        if (React.isValidElement(node) && node.props.children) {
            return React.cloneElement(node, {
                ...node.props,
                children: React.Children.map(node.props.children, highlightNode),
            });
        }
        return node;
    };
    return <>{React.Children.map(text, highlightNode)}</>;
};
