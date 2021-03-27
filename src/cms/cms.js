import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import IndexPagePreview from './preview-templates/IndexPagePreview';
import DefaultPagePreview from './preview-templates/DefaultPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
// import AboutPagePreview from './preview-templates/AboutPagePreview';
// import ProductPagePreview from './preview-templates/ProductPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);

// ABOUT US
CMS.registerPreviewTemplate('our-mission', DefaultPagePreview);
CMS.registerPreviewTemplate('acknowledgements', DefaultPagePreview);

CMS.registerPreviewTemplate('blog', BlogPostPreview);

// NOT USING RIGHT NOW
// CMS.registerPreviewTemplate('about', AboutPagePreview)
// CMS.registerPreviewTemplate('products', ProductPagePreview)
