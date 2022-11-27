CREATE TABLE gallery (
    "id" serial primary key,
    "path" varchar(255) not null,
    "description" varchar(255) not null,
    "likes" integer default 0,
    "clicked" boolean default false
);

INSERT INTO gallery ("path", "description", "likes", "clicked")
VALUES 
('images/image1.png', 'My favorite Pokémon.', 0, false),
('images/image2.png', 'Alex and I went to Ebisu and bought coffee.', 0, false),
('images/image3.png', 'Me at a violin recital in 2010.', 0, false),
('images/image4.png', 'Funny 404 sign I saw up north.', 0 , false),
('images/image5.png', 'Pickled herring, bread, and lingonberry sauce.', 0, false),
('images/image6.png', 'My cats sleeping next to me.', 0, false);