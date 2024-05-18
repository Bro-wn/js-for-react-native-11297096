function createArrayOfObjects(names, modifiedNames) {
    const objects = [];

    for (let i = 0; i < names.length; i++) {
    const object = {
        originalName: names[i],
        modifiedName: modifiedNames[i],
        id: i + 1,
    };

    objects.push(object);
    }

    return objects;
    }