/**
 * @copyright 2025 codewithsadee
 * @license Apache-2.0
 */

import type { JSX, ReactNode } from 'react';
 
export type ProjectTypes = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  // link: string;
  github: string;
};


export type ExperienceType = {
  year: string;
  title: string;
  institute: string;
  desc: string;
};

export type ServiceType = {
  title: string;
  desc: string;
  // projects: string;
  icon: JSX.Element;
};

export type ToolsType = {
  imgSrc: string;
  label: string;
};

export type StatsType = {
  number: string;
  label: string;
};

export type TestimonialsType = {
  name: string;
  role: string;
  image: string;
  text: string;
  link: string;
};

export type NavLinksType = {
  name: string;
  link: string;
  icon: ReactNode;
};
export type LinksType = {
  label: string;
  link: string;
  icon: React.ElementType;
};