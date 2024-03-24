export interface Post {
    id:             number;
    date:           Date;
    date_gmt:       Date;
    guid:           GUID;
    modified:       Date;
    modified_gmt:   Date;
    slug:           string;
    status:         string;
    type:           string;
    link:           string;
    title:          GUID;
    content:        Content;
    excerpt:        Content;
    author:         number;
    featured_media: number;
    comment_status: string;
    ping_status:    string;
    sticky:         boolean;
    template:       string;
    format:         string;
    meta:           Meta;
    categories:     number[];
    tags:           number[];
    _links:         PostLinks;
    _embedded:      Embedded;
}

export interface Embedded {
    author:              EmbeddedAuthor[];
    "wp:term":           Array<EmbeddedWpTerm[]>;
    "wp:featuredmedia"?: WpFeaturedmedia[];
}

export interface EmbeddedAuthor {
    id:          number;
    name:        string;
    url:         string;
    description: string;
    link:        string;
    slug:        string;
    avatar_urls: { [key: string]: string };
    _links:      AuthorLinks;
}

export interface AuthorLinks {
    self:       About[];
    collection: About[];
}

export interface About {
    href: string;
}

export interface WpFeaturedmedia {
    id:            number;
    date:          Date;
    slug:          string;
    type:          string;
    link:          string;
    title:         GUID;
    author:        number;
    caption:       GUID;
    alt_text:      string;
    media_type:    string;
    mime_type:     MIMEType;
    media_details: MediaDetails;
    source_url:    string;
    _links:        WpFeaturedmediaLinks;
}

export interface WpFeaturedmediaLinks {
    self:       About[];
    collection: About[];
    about:      About[];
    author:     ReplyElement[];
    replies:    ReplyElement[];
}

export interface ReplyElement {
    embeddable: boolean;
    href:       string;
}

export interface GUID {
    rendered: string;
}

export interface MediaDetails {
    width:      number;
    height:     number;
    file:       string;
    filesize:   number;
    sizes:      Sizes;
    image_meta: ImageMeta;
}

export interface ImageMeta {
    aperture:          string;
    credit:            string;
    camera:            string;
    caption:           string;
    created_timestamp: string;
    copyright:         string;
    focal_length:      string;
    iso:               string;
    shutter_speed:     string;
    title:             string;
    orientation:       string;
    keywords:          any[];
}

export interface Sizes {
    medium:       Full;
    thumbnail:    Full;
    medium_large: Full;
    full:         Full;
}

export interface Full {
    file:       string;
    width:      number;
    height:     number;
    mime_type:  MIMEType;
    source_url: string;
    filesize?:  number;
}

export enum MIMEType {
    ImagePNG = "image/png",
}

export interface EmbeddedWpTerm {
    id:       number;
    link:     string;
    name:     string;
    slug:     string;
    taxonomy: Taxonomy;
    _links:   WpTermLinks;
}

export interface WpTermLinks {
    self:           About[];
    collection:     About[];
    about:          About[];
    "wp:post_type": About[];
    curies:         Cury[];
}

export interface Cury {
    name:      Name;
    href:      Href;
    templated: boolean;
}

export enum Href {
    HTTPSAPIWOrgRel = "https://api.w.org/{rel}",
}

export enum Name {
    Wp = "wp",
}

export enum Taxonomy {
    Category = "category",
    PostTag = "post_tag",
}

export interface PostLinks {
    self:                  About[];
    collection:            About[];
    about:                 About[];
    author:                ReplyElement[];
    replies:               ReplyElement[];
    "version-history":     VersionHistory[];
    "predecessor-version": PredecessorVersion[];
    "wp:attachment":       About[];
    "wp:term":             LinksWpTerm[];
    curies:                Cury[];
    "wp:featuredmedia"?:   ReplyElement[];
}

export interface PredecessorVersion {
    id:   number;
    href: string;
}

export interface VersionHistory {
    count: number;
    href:  string;
}

export interface LinksWpTerm {
    taxonomy:   Taxonomy;
    embeddable: boolean;
    href:       string;
}

export interface Content {
    rendered:  string;
    protected: boolean;
}

export interface Meta {
    footnotes: string;
}
