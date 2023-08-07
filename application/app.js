(() => {
  const OA_DOCUMENT_PATH =
    "http://localhost:6006/src/documents/samples/oa-v2-raw.json"; // update to your document.json to see actual rendered results

  const init = (oaDocument) => {
    let frame;
    const iframe = document.getElementById("iframe");
    const viewSelector = document.getElementById("view-selector");

    const renderDocumentAction = {
      type: "RENDER_DOCUMENT",
      payload: {
        document: oaDocument,
      },
    };

    const getTemplatesAction = {
      type: "GET_TEMPLATES",
      payload: oaDocument,
    };

    const selectTemplateAction = (id) => ({
      type: "SELECT_TEMPLATE",
      payload: id,
    });

    const renderViewSelector = () => {
      if (!frame) console.warn("frame connection not established.");
      frame.dispatch(getTemplatesAction).then((templates) => {
        templates.forEach((tab) => {
          const btn = document.createElement("button");
          btn.innerHTML = tab.label;
          btn.id = `selector-${tab.id}`;
          btn.onclick = () => {
            frame.dispatch(selectTemplateAction(tab.id));
          };
          viewSelector.appendChild(btn);
        });
      });
    };

    const renderDocument = () => {
      if (!frame) console.warn("frame connection not established.");
      frame.dispatch(renderDocumentAction);
    };

    const connection = Penpal.connectToChild({
      iframe,
      methods: {
        dispatch: (action) => {
          const { type, payload } = action;
          if (type === "UPDATE_HEIGHT") {
            iframe.height = payload;
          }
        },
      },
      debug: false,
    });

    connection.promise.then((child) => {
      frame = child;
      renderViewSelector();
      renderDocument();
    });
  };

  fetch(OA_DOCUMENT_PATH)
    .then((response) => response.json())
    .then((oaDocument) => {
      init(oaDocument);
    });
})();
