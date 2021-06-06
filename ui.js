const theadDespesa = `<tr>
  <th class="text-center" scope="col">#</th>
  <th class="text-center" scope="col">Tipo de evento de despesa</th>
  <th class="text-center" scope="col">Número do empenho</th>
  <th class="text-center" scope="col">Fornecedor</th>
  <th class="text-center" scope="col">Nome do fornecedor</th>
  <th class="text-center" scope="col">Data</th>
  <th class="text-center" scope="col">Valor da despesa</th>
</tr>`;

const theadReceita = `<tr>
  <th class="text-center" scope="col">#</th>
  <th class="text-center" scope="col">Código e descrição da Fonte de Recurso</th>
  <th class="text-center" scope="col">Código e descrição do Código de Aplicação Fixo</th>
  <th class="text-center" scope="col">Código e descrição da Alínea</th>
  <th class="text-center" scope="col">Código e descrição da Subalínea</th>
  <th class="text-center" scope="col">Mês</th>
  <th class="text-center" scope="col">Valor da arrecadação</th>
</tr>`;

class UI {
  showDespesa(data) {
    let tbodyOutput = '';
    let i = 0;
    data.forEach(function (city) {
      i++;
      tbodyOutput += `
      <tr id=${i}>
        <td class="text-center">${i}</td>
        <td class="text-center">${city.evento}</td>
        <td class="text-center nr_empenho">${city.nr_empenho}</td>
        <td class="text-center">${city.id_fornecedor}</td>
        <td class="text-center">${city.nm_fornecedor}</td>
        <td class="text-center">${city.dt_emissao_despesa}</td>
        <td class="text-center">${city.vl_despesa}</td>
      </tr>
    `;
    });
    document.querySelector('#dataTable').innerHTML = tbodyOutput;
  }
  showReceita(data) {
    let tbodyOutput = '';
    let i = 0;
    data.forEach(function (city) {
      i++;
      tbodyOutput += `
      <tr id=${i}>
        <td class="text-center">${i}</td>
        <td class="text-center">${city.ds_fonte_recurso}</td>
        <td class="text-center">${city.ds_cd_aplicacao_fixo}</td>
        <td class="text-center">${city.ds_alinea}</td>
        <td class="text-center">${city.ds_subalinea}</td>
        <td class="text-center">${city.mes}</td>
        <td class="text-center">${city.vl_arrecadacao}</td>
      </tr>
    `;
    });
    document.querySelector('#dataTable').innerHTML = tbodyOutput;
  }
  showCities(data) {
    let modalBody = '';
    let i = 0;
    data.forEach(function (city) {
      i++;
      modalBody += `<tr id=${i}>
        <td class="text-center">${i}</td>
        <td class="text-center">${city.municipio_extenso}</td>
      </tr>`;
    });
    document.querySelector('#modalCities').innerHTML = modalBody;
  }
}

const dataTableTranslation = {
  emptyTable: 'Nenhum registro encontrado',
  info: 'Mostrando de _START_ até _END_ de _TOTAL_ registros',
  infoEmpty: 'Mostrando 0 até 0 de 0 registros',
  infoFiltered: '(Filtrados de _MAX_ registros)',
  infoThousands: '.',
  loadingRecords: 'Carregando...',
  processing: 'Processando...',
  zeroRecords: 'Nenhum registro encontrado',
  search: 'Pesquisar',
  paginate: {
    next: 'Próximo',
    previous: 'Anterior',
    first: 'Primeiro',
    last: 'Último',
  },
  aria: {
    sortAscending: ': Ordenar colunas de forma ascendente',
    sortDescending: ': Ordenar colunas de forma descendente',
  },
  select: {
    rows: {
      _: 'Selecionado %d linhas',
      0: 'Nenhuma linha selecionada',
      1: 'Selecionado 1 linha',
    },
    1: '%d linha selecionada',
    _: '%d linhas selecionadas',
    cells: {
      1: '1 célula selecionada',
      _: '%d células selecionadas',
    },
    columns: {
      1: '1 coluna selecionada',
      _: '%d colunas selecionadas',
    },
  },
  buttons: {
    copySuccess: {
      1: 'Uma linha copiada com sucesso',
      _: '%d linhas copiadas com sucesso',
    },
    collection:
      'Coleção  <span class="ui-button-icon-primary ui-icon ui-icon-triangle-1-s"></span>',
    colvis: 'Visibilidade da Coluna',
    colvisRestore: 'Restaurar Visibilidade',
    copy: 'Copiar',
    copyKeys:
      'Pressione ctrl ou u2318 + C para copiar os dados da tabela para a área de transferência do sistema. Para cancelar, clique nesta mensagem ou pressione Esc..',
    copyTitle: 'Copiar para a Área de Transferência',
    csv: 'CSV',
    excel: 'Excel',
    pageLength: {
      '-1': 'Mostrar todos os registros',
      1: 'Mostrar 1 registro',
      _: 'Mostrar %d registros',
    },
    pdf: 'PDF',
    print: 'Imprimir',
  },
  autoFill: {
    cancel: 'Cancelar',
    fill: 'Preencher todas as células com',
    fillHorizontal: 'Preencher células horizontalmente',
    fillVertical: 'Preencher células verticalmente',
  },
  lengthMenu: 'Exibir _MENU_ resultados por página',
  searchBuilder: {
    add: 'Adicionar Condição',
    button: {
      0: 'Construtor de Pesquisa',
      _: 'Construtor de Pesquisa (%d)',
    },
    clearAll: 'Limpar Tudo',
    condition: 'Condição',
    conditions: {
      date: {
        after: 'Depois',
        before: 'Antes',
        between: 'Entre',
        empty: 'Vazio',
        equals: 'Igual',
        not: 'Não',
        notBetween: 'Não Entre',
        notEmpty: 'Não Vazio',
      },
      number: {
        between: 'Entre',
        empty: 'Vazio',
        equals: 'Igual',
        gt: 'Maior Que',
        gte: 'Maior ou Igual a',
        lt: 'Menor Que',
        lte: 'Menor ou Igual a',
        not: 'Não',
        notBetween: 'Não Entre',
        notEmpty: 'Não Vazio',
      },
      string: {
        contains: 'Contém',
        empty: 'Vazio',
        endsWith: 'Termina Com',
        equals: 'Igual',
        not: 'Não',
        notEmpty: 'Não Vazio',
        startsWith: 'Começa Com',
      },
      array: {
        contains: 'Contém',
        empty: 'Vazio',
        equals: 'Igual à',
        not: 'Não',
        notEmpty: 'Não vazio',
        without: 'Não possui',
      },
    },
    data: 'Data',
    deleteTitle: 'Excluir regra de filtragem',
    logicAnd: 'E',
    logicOr: 'Ou',
    title: {
      0: 'Construtor de Pesquisa',
      _: 'Construtor de Pesquisa (%d)',
    },
    value: 'Valor',
  },
  searchPanes: {
    clearMessage: 'Limpar Tudo',
    collapse: {
      0: 'Painéis de Pesquisa',
      _: 'Painéis de Pesquisa (%d)',
    },
    count: '{total}',
    countFiltered: '{shown} ({total})',
    emptyPanes: 'Nenhum Painel de Pesquisa',
    loadMessage: 'Carregando Painéis de Pesquisa...',
    title: 'Filtros Ativos',
  },
  searchPlaceholder: 'Digite um termo para pesquisar',
  thousands: '.',
  datetime: {
    previous: 'Anterior',
    next: 'Próximo',
    hours: 'Hora',
    minutes: 'Minuto',
    seconds: 'Segundo',
    amPm: ['am', 'pm'],
    unknown: '-',
  },
  editor: {
    close: 'Fechar',
    create: {
      button: 'Novo',
      submit: 'Criar',
      title: 'Criar novo registro',
    },
    edit: {
      button: 'Editar',
      submit: 'Atualizar',
      title: 'Editar registro',
    },
    error: {
      system:
        'Ocorreu um erro no sistema (<a target="\\" rel="nofollow" href="\\">Mais informações</a>).',
    },
    multi: {
      noMulti:
        'Essa entrada pode ser editada individualmente, mas não como parte do grupo',
      restore: 'Desfazer alterações',
      title: 'Multiplos valores',
      info: 'Os itens selecionados contêm valores diferentes para esta entrada. Para editar e definir todos os itens para esta entrada com o mesmo valor, clique ou toque aqui, caso contrário, eles manterão seus valores individuais.',
    },
    remove: {
      button: 'Remover',
      confirm: {
        _: 'Tem certeza que quer deletar %d linhas?',
        1: 'Tem certeza que quer deletar 1 linha?',
      },
      submit: 'Remover',
      title: 'Remover registro',
    },
  },
  decimal: ',',
};
