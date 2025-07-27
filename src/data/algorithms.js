// アルゴリズムデータ構造
export const algorithms = [
  // ソートアルゴリズム
  {
    id: 'bubble-sort',
    name: 'バブルソート',
    category: 'ソートアルゴリズム',
    tags: ['sort', 'basic', 'comparison'],
    timeComplexity: {
      best: 'O(n)',
      average: 'O(n²)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(1)',
    description: `バブルソートは、隣接する要素を繰り返し比較し、順序が間違っている場合に交換することでリストをソートする、最もシンプルで直感的なソートアルゴリズムの一つです。このプロセスを繰り返すことで、最大の要素がリストの末尾に「泡のように」浮上していくことからこの名前が付けられました。

## 詳細な動作原理

バブルソートは、リストの先頭から開始し、隣接する2つの要素を比較します。もし左側の要素が右側の要素より大きい場合（昇順ソートの場合）、それらを交換します。この1回のパスが完了すると、リストの最後の要素は正しい位置に配置されます。次のパスでは、最後の要素を除いた残りのリストに対して同じ処理を繰り返します。このプロセスは、リスト全体がソートされるまで、またはあるパスで一度も交換が行われなくなるまで続きます。交換が行われなかった場合は、リストが既にソートされていることを意味するため、アルゴリズムを早期に終了できます。

## 特徴と特性

- **安定ソート**: 同じ値を持つ要素の相対的な順序がソート後も保持されます。これは、特定のアプリケーションにおいて重要な特性となることがあります。
- **インプレースソート**: ソートを行うために、入力配列とは別に大量の追加メモリを必要としません。O(1)の追加スペースで動作します。
- **比較ベース**: 要素間の大小関係を比較することによってソートを行います。
- **適応性**: ほとんどソート済みのデータに対しては、比較的効率的に動作します。この場合、交換回数が少なくなり、早期終了の最適化が有効に機能します。

## 実用的な応用と限界

バブルソートは、その非効率性（特に最悪ケースと平均ケースでのO(n²)の時間計算量）から、大規模なデータセットの実用的なソートにはほとんど使用されません。しかし、アルゴリズムの概念を理解するための教育目的や、非常に小さなデータセット（例えば、要素数が10個未満）のソート、あるいはほとんどソート済みの配列の最終調整など、特定のニッチなシナリオでは限定的に使用されることがあります。そのシンプルさゆえに、プログラミング初心者にとってソートアルゴリズムの動作を視覚的に理解しやすいという大きな利点があります。

## 歴史的背景と発展

バブルソートの起源は明確ではありませんが、コンピュータサイエンスの初期から存在し、ソートアルゴリズムの基本として広く教えられてきました。その直感的な動作は、他のより複雑なソートアルゴリズム（クイックソートやマージソートなど）を学ぶ上での基礎となります。現代のプログラミングでは、より高速なアルゴリズムが標準ライブラリとして提供されているため、手動でバブルソートを実装することは稀です。`,
    codeImplementation: `#include <stdio.h>

// バブルソートの実装
void bubbleSort(int arr[], int n) {
    int i, j, temp;
    int swapped;
    
    // 外側のループ: パス数を制御
    for (i = 0; i < n - 1; i++) {
        swapped = 0; // 交換が発生したかのフラグ
        
        // 内側のループ: 隣接要素の比較と交換
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // 要素の交換
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = 1;
            }
        }
        
        // 交換が発生しなかった場合、ソート完了
        if (swapped == 0) {
            break;
        }
    }
}

// 配列を表示する関数
void printArray(int arr[], int size) {
    int i;
    for (i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

// メイン関数
int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    printf("ソート前の配列: ");
    printArray(arr, n);
    
    bubbleSort(arr, n);
    
    printf("ソート後の配列: ");
    printArray(arr, n);
    
    return 0;
}`,
    advantages: [
      'アルゴリズムが非常にシンプルで理解しやすい',
      '実装が容易',
      '安定ソートである',
      'インプレースソートである',
      '小さなデータセットやほとんどソート済みのデータに適している'
    ],
    disadvantages: [
      '時間計算量がO(n²)と非効率で、大規模データには不向き',
      '要素の移動回数が多く、パフォーマンスが低い',
      '実用的な用途は限定的'
    ],
    useCases: [
      '教育目的でのソートアルゴリズムの学習',
      '非常に小さなデータセット（10要素以下）のソート',
      'ほとんどソート済みのデータの最終調整',
      'アルゴリズムのデモンストレーション'
    ]
  },
  {
    id: 'quick-sort',
    name: 'クイックソート',
    category: 'ソートアルゴリズム',
    tags: ['sort', 'divide-conquer', 'recursive'],
    timeComplexity: {
      best: 'O(n log n)',
      average: 'O(n log n)',
      worst: 'O(n²)'
    },
    spaceComplexity: 'O(log n)',
    description: `クイックソートは、チャールズ・アントニー・リチャード・ホーアによって1959年に考案された、分割統治法に基づく非常に効率的なソートアルゴリズムです。その平均的な高速性から、多くのプログラミング言語の標準ライブラリで採用されています。

## 詳細な動作原理

クイックソートの基本的な考え方は、「ピボット（基準値）」と呼ばれる要素を一つ選び、そのピボットを基準に配列を二つの部分に分割することです。ピボットより小さい要素はピボットの左側に、大きい要素は右側に配置されます。この分割操作（パーティション）が完了すると、ピボットは最終的にソートされた位置に置かれます。その後、ピボットの左側の部分配列と右側の部分配列に対して、再帰的に同じクイックソートの処理を適用します。この再帰的な分割とソートが、部分配列のサイズが1になるまで繰り返されることで、最終的に配列全体がソートされます。

## 特徴と特性

- **分割統治法**: 問題を小さな部分問題に分割し、それぞれを解決してから結合するというパラダイムに従います。
- **インプレースソート**: ソートを行うために、入力配列とは別に大量の追加メモリを必要としません。再帰呼び出しのためのスタック領域は必要ですが、これは通常O(log n)に収まります。
- **不安定ソート**: 同じ値を持つ要素の相対的な順序がソート後も保持されない場合があります。安定性が求められる場合は、マージソートなどの他のアルゴリズムが適しています。
- **平均ケースでの高速性**: 最悪ケースではO(n²)となることがありますが、適切なピボット選択戦略を用いることで、平均的にはO(n log n)という非常に高速な性能を発揮します。これは、比較ベースのソートアルゴリズムにおける理論的な下限に近いです。

## 実用的な応用と最適化

クイックソートは、その高速性とメモリ効率の良さから、様々な場面で利用されています。例えば、データベースのソート機能、ファイルシステムのソート、大規模なデータセットの分析、数値計算ライブラリなど、効率的なソートが求められるあらゆる場所でその真価を発揮します。多くのプログラミング言語の標準ライブラリ（C++の'std::sort'、Javaの'Arrays.sort'の一部実装など）で内部的に採用されています。

パフォーマンスをさらに向上させるために、様々な最適化手法が用いられます。例えば、
- **ピボット選択**: 常に最悪ケースを避けるために、ランダムなピボット選択、中央値の選択（3つの要素の中央値を取るなど）、または中央値の中央値（Median-of-Medians）アルゴリズムなどが用いられます。
- **小さな部分配列の処理**: 部分配列が非常に小さくなった場合、クイックソートのオーバーヘッドが大きくなるため、挿入ソートなどのよりシンプルなアルゴリズムに切り替えるハイブリッドアプローチが一般的です。
- **テール再帰の最適化**: 再帰呼び出しの深さを減らし、スタックオーバーフローのリスクを軽減するために、テール再帰の最適化が適用されることがあります。

## 歴史的背景と発展

クイックソートは、1959年にイギリスの計算機科学者であるチャールズ・アントニー・リチャード・ホーア（C.A.R. Hoare）によって考案されました。彼は機械翻訳プロジェクトに取り組む中で、単語のソートを効率的に行う必要性からこのアルゴリズムを開発しました。1961年に発表されて以来、その優れた性能と比較的シンプルな実装から、最も広く使われているソートアルゴリズムの一つとなりました。その後の研究により、様々なピボット選択戦略やハイブリッドアプローチが開発され、その実用性がさらに高められています。`,
    codeImplementation: `#include <stdio.h>

// 要素を交換する関数
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// パーティション関数
int partition(int arr[], int low, int high) {
    // 最後の要素をピボットとして選択
    int pivot = arr[high];
    int i = (low - 1); // 小さい要素のインデックス
    
    for (int j = low; j <= high - 1; j++) {
        // 現在の要素がピボット以下の場合
        if (arr[j] <= pivot) {
            i++; // 小さい要素のインデックスを増加
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return (i + 1);
}

// クイックソートの実装
void quickSort(int arr[], int low, int high) {
    if (low < high) {
        // パーティションインデックスを取得
        int pi = partition(arr, low, high);
        
        // ピボットの前後を個別にソート
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

// 配列を表示する関数
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

// メイン関数
int main() {
    int arr[] = {10, 7, 8, 9, 1, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    printf("ソート前の配列: ");
    printArray(arr, n);
    
    quickSort(arr, 0, n - 1);
    
    printf("ソート後の配列: ");
    printArray(arr, n);
    
    return 0;
}`,
    advantages: [
      '平均的な時間計算量がO(n log n)と非常に高速',
      'インプレースソートでメモリ効率が良い',
      '実装が比較的簡単で、多くのプログラミング言語の標準ライブラリで採用されている',
      '多くの実用的なケースで高性能を発揮する'
    ],
    disadvantages: [
      '最悪時間計算量がO(n²)となる可能性があり、データによっては性能が劣化する',
      '不安定ソートであるため、同じ値の要素の相対順序が保持されない',
      'ピボット選択戦略によって性能が大きく左右される',
      '再帰呼び出しによるスタックオーバーフローの可能性があり、深い再帰には注意が必要'
    ],
    useCases: [
      '一般的なソート処理全般',
      '大規模なデータセットの高速ソート',
      'システムライブラリの標準ソート実装',
      'メモリ使用量を抑えたい場合',
      'データベースのインデックス作成やデータ整理'
    ]
  },
  {
    id: 'merge-sort',
    name: 'マージソート',
    category: 'ソートアルゴリズム',
    tags: ['sort', 'divide-conquer', 'stable'],
    timeComplexity: {
      best: 'O(n log n)',
      average: 'O(n log n)',
      worst: 'O(n log n)'
    },
    spaceComplexity: 'O(n)',
    description: `マージソートは、ジョン・フォン・ノイマンによって1945年に考案された、分割統治法に基づく安定なソートアルゴリズムです。常にO(n log n)の時間計算量を保証するため、予測可能な性能が求められる場面で特に有用です。`,
    codeImplementation: `#include <stdio.h>
#include <stdlib.h>

// マージ関数
void merge(int arr[], int left, int mid, int right) {
    int i, j, k;
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    // 一時配列を作成
    int* leftArr = (int*)malloc(n1 * sizeof(int));
    int* rightArr = (int*)malloc(n2 * sizeof(int));
    
    // データを一時配列にコピー
    for (i = 0; i < n1; i++)
        leftArr[i] = arr[left + i];
    for (j = 0; j < n2; j++)
        rightArr[j] = arr[mid + 1 + j];
    
    // 一時配列をマージして元の配列に戻す
    i = 0; // 左の配列のインデックス
    j = 0; // 右の配列のインデックス
    k = left; // マージされた配列のインデックス
    
    while (i < n1 && j < n2) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }
    
    // 残りの要素をコピー
    while (i < n1) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }
    
    while (j < n2) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
    
    // メモリを解放
    free(leftArr);
    free(rightArr);
}

// マージソートの実装
void mergeSort(int arr[], int left, int right) {
    if (left < right) {
        // 中央点を計算
        int mid = left + (right - left) / 2;
        
        // 左半分をソート
        mergeSort(arr, left, mid);
        
        // 右半分をソート
        mergeSort(arr, mid + 1, right);
        
        // ソート済みの半分をマージ
        merge(arr, left, mid, right);
    }
}

// 配列を表示する関数
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

// メイン関数
int main() {
    int arr[] = {12, 11, 13, 5, 6, 7};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    printf("ソート前の配列: ");
    printArray(arr, n);
    
    mergeSort(arr, 0, n - 1);
    
    printf("ソート後の配列: ");
    printArray(arr, n);
    
    return 0;
}`,
    advantages: [
      '常にO(n log n)の時間計算量を保証し、性能が予測可能',
      '安定ソートであるため、同じ値の要素の相対順序が保持される',
      '大規模なデータセットや外部ソートに適している',
      '並列化が容易で、マルチコア環境での高速化が期待できる',
      'リンクリストのソートにも効率的に適用可能'
    ],
    disadvantages: [
      'O(n)の追加メモリが必要となり、メモリ消費が大きい',
      '小さなデータセットではオーバーヘッドが大きく、他のソートアルゴリズムより遅くなる場合がある',
      'インプレースソートではないため、メモリ効率がクイックソートに劣る'
    ],
    useCases: [
      '安定性が重要なソート処理（例：データベースの複数キーソート）',
      '非常に大きなデータセットの処理（外部ソート）',
      '並列処理環境でのソート',
      'リンクリストのソート',
      'Timsortなどのハイブリッドソートアルゴリズムの基盤'
    ]
  },
  // 探索アルゴリズム
  {
    id: 'linear-search',
    name: '線形探索',
    category: '探索アルゴリズム',
    tags: ['search', 'basic', 'sequential'],
    timeComplexity: {
      best: 'O(1)',
      average: 'O(n)',
      worst: 'O(n)'
    },
    spaceComplexity: 'O(1)',
    description: `線形探索（リニアサーチ）は、配列やリストの要素を先頭から順番に一つずつ調べていき、目的の値が見つかるまで比較を続ける、最もシンプルで直感的な探索アルゴリズムです。ソートされていないデータに対しても適用できる汎用性があります。`,
    codeImplementation: `#include <stdio.h>

// 線形探索の実装
int linearSearch(int arr[], int n, int target) {
    // 配列の各要素を順番にチェック
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            return i; // 見つかった場合、インデックスを返す
        }
    }
    return -1; // 見つからない場合、-1を返す
}

// 改良版: 番兵を使った線形探索
int linearSearchWithSentinel(int arr[], int n, int target) {
    // 配列が空の場合や、番兵を置くスペースがない場合は通常の線形探索にフォールバック
    if (n == 0) return -1;
    
    int last = arr[n - 1]; // 最後の要素を保存
    arr[n - 1] = target;   // 番兵として目的の値を設定
    
    int i = 0;
    while (arr[i] != target) {
        i++;
    }
    
    arr[n - 1] = last; // 元の値を復元
    
    // 番兵の位置で見つかった場合は、元の値と比較して本当に見つかったか確認
    if (i < n - 1 || arr[n - 1] == target) {
        return i;
    }
    return -1;
}

// 配列を表示する関数
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

// メイン関数
int main() {
    int arr[] = {2, 3, 4, 10, 40, 50, 80};
    int n = sizeof(arr) / sizeof(arr[0]);
    int target = 10;
    
    printf("配列: ");
    printArray(arr, n);
    printf("探索対象: %d\\n", target);
    
    // 基本的な線形探索
    int result = linearSearch(arr, n, target);
    if (result != -1) {
        printf("基本線形探索: 要素 %d はインデックス %d で見つかりました\\n", target, result);
    } else {
        printf("基本線形探索: 要素 %d は見つかりませんでした\\n", target);
    }
    
    // 番兵を使った線形探索
    int arr2[] = {2, 3, 4, 10, 40, 50, 80};
    result = linearSearchWithSentinel(arr2, n, target);
    if (result != -1) {
        printf("番兵線形探索: 要素 %d はインデックス %d で見つかりました\\n", target, result);
    } else {
        printf("番兵線形探索: 要素 %d は見つかりませんでした\\n", target);
    }
    
    // 見つからないケースのテスト
    target = 99;
    printf("\\n探索対象: %d\\n", target);
    result = linearSearch(arr, n, target);
    if (result != -1) {
        printf("基本線形探索: 要素 %d はインデックス %d で見つかりました\\n", target, result);
    } else {
        printf("基本線形探索: 要素 %d は見つかりませんでした\\n", target);
    }
    
    return 0;
}`,
    advantages: [
      'アルゴリズムが非常にシンプルで理解しやすい',
      'ソートされていない配列やリンクリストなど、順序付けられていないデータ構造でも使用可能',
      '実装が容易で、デバッグも比較的簡単',
      'メモリ使用量が非常に少ない（O(1)の空間計算量）'
    ],
    disadvantages: [
      '時間計算量がO(n)と非効率で、大規模なデータセットには不向き',
      '要素数が多くなるにつれてパフォーマンスが著しく低下する',
      'ソート済み配列の利点を活用できないため、二分探索などに劣る'
    ],
    useCases: [
      '非常に小さなデータセットの探索（要素数が少ない場合）',
      'ソートされていないデータの探索',
      '一回限りの探索処理や、探索頻度が低い場合',
      'リンクリストなどの順次アクセス構造に対する探索',
      'アルゴリズムのデモンストレーションや学習目的'
    ]
  },
  {
    id: 'binary-search',
    name: '二分探索',
    category: '探索アルゴリズム',
    tags: ['search', 'divide-conquer', 'sorted'],
    timeComplexity: {
      best: 'O(1)',
      average: 'O(log n)',
      worst: 'O(log n)'
    },
    spaceComplexity: 'O(1)',
    description: `二分探索（バイナリサーチ）は、ソート済み配列に対して非常に効率的に探索を行うアルゴリズムです。探索範囲を繰り返し半分に絞り込むことで、目的の要素を高速に見つけ出します。その対数的な時間計算量により、大規模なデータセットでも優れたパフォーマンスを発揮します。`,
    codeImplementation: `#include <stdio.h>

// 反復的な二分探索の実装
int binarySearchIterative(int arr[], int n, int target) {
    int left = 0;
    int right = n - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2; // オーバーフロー対策
        
        // 中央要素が目的の値と一致
        if (arr[mid] == target) {
            return mid;
        }
        
        // 目的の値が中央要素より小さい場合、左半分を探索
        if (arr[mid] > target) {
            right = mid - 1;
        }
        // 目的の値が中央要素より大きい場合、右半分を探索
        else {
            left = mid + 1;
        }
    }
    
    return -1; // 見つからない場合
}

// 再帰的な二分探索の実装
int binarySearchRecursive(int arr[], int left, int right, int target) {
    if (right >= left) {
        int mid = left + (right - left) / 2;
        
        // 中央要素が目的の値と一致
        if (arr[mid] == target) {
            return mid;
        }
        
        // 目的の値が中央要素より小さい場合、左半分を探索
        if (arr[mid] > target) {
            return binarySearchRecursive(arr, left, mid - 1, target);
        }
        
        // 目的の値が中央要素より大きい場合、右半分を探索
        return binarySearchRecursive(arr, mid + 1, right, target);
    }
    
    return -1; // 見つからない場合
}

// 最初に出現する位置を見つける二分探索
int findFirst(int arr[], int n, int target) {
    int left = 0, right = n - 1;
    int result = -1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            result = mid;
            right = mid - 1; // 左側を続けて探索
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
}

// 配列を表示する関数
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

// メイン関数
int main() {
    int arr[] = {2, 3, 4, 10, 10, 10, 40, 50};
    int n = sizeof(arr) / sizeof(arr[0]);
    int target = 10;
    
    printf("ソート済み配列: ");
    printArray(arr, n);
    printf("探索対象: %d\\n", target);
    
    // 反復的な二分探索
    int result = binarySearchIterative(arr, n, target);
    if (result != -1) {
        printf("反復的二分探索: 要素 %d はインデックス %d で見つかりました\\n", target, result);
    } else {
        printf("反復的二分探索: 要素 %d は見つかりませんでした\\n", target);
    }
    
    // 再帰的な二分探索
    result = binarySearchRecursive(arr, 0, n - 1, target);
    if (result != -1) {
        printf("再帰的二分探索: 要素 %d はインデックス %d で見つかりました\\n", target, result);
    } else {
        printf("再帰的二分探索: 要素 %d は見つかりませんでした\\n", target);
    }
    
    // 最初の出現位置を見つける
    result = findFirst(arr, n, target);
    if (result != -1) {
        printf("最初の出現位置: 要素 %d はインデックス %d で最初に見つかりました\\n", target, result);
    } else {
        printf("最初の出現位置: 要素 %d は見つかりませんでした\\n", target);
    }
    
    // 見つからないケースのテスト
    target = 99;
    printf("\\n探索対象: %d\\n", target);
    result = binarySearchIterative(arr, n, target);
    if (result != -1) {
        printf("反復的二分探索: 要素 %d はインデックス %d で見つかりました\\n", target, result);
    } else {
        printf("反復的二分探索: 要素 %d は見つかりませんでした\\n", target);
    }
    
    return 0;
}`,
    advantages: [
      '時間計算量がO(log n)と非常に高速で、大規模なデータセットでも効率的',
      'メモリ使用量が少ない（O(1)の空間計算量）',
      '予測可能な性能を発揮し、最悪ケースでも効率が落ちにくい',
      '実装が比較的簡単で、多くの応用がある'
    ],
    disadvantages: [
      '配列がソート済みであるという厳格な前提条件がある',
      'ランダムアクセスが必要なため、リンクリストのようなデータ構造には不向き',
      'データの挿入や削除のたびにソートを維持するコストが発生する可能性がある'
    ],
    useCases: [
      'ソート済み配列での高速探索全般',
      'データベースのインデックス検索',
      '辞書や電話帳のようなソートされたリストからの検索',
      '数値計算での方程式の根の探索（二分法）',
      'バージョン管理システムでのバグの発生箇所の特定（バイセクト）',
      'ゲーム内の要素検索やAIの意思決定'
    ]
  },
  // グラフアルゴリズム
  {
    id: 'dfs',
    name: '深さ優先探索',
    category: 'グラフアルゴリズム',
    tags: ['graph', 'traversal', 'recursive'],
    timeComplexity: {
      best: 'O(V + E)',
      average: 'O(V + E)',
      worst: 'O(V + E)'
    },
    spaceComplexity: 'O(V)',
    description: `深さ優先探索（DFS: Depth-First Search）は、グラフやツリー構造を探索するためのアルゴリズムの一つです。現在のノードから可能な限り深く、つまり「深さ」方向に探索を進め、行き止まりに達するか、目的のノードが見つかるまで探索を続けます。行き止まりに達した場合は、探索経路を「バックトラック」して、まだ訪問していない隣接ノードがある別の経路を探索します。`,
    codeImplementation: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_VERTICES 100

// グラフ構造体
typedef struct {
    int vertices;
    int adjMatrix[MAX_VERTICES][MAX_VERTICES];
} Graph;

// グラフの初期化
Graph* createGraph(int vertices) {
    Graph* graph = (Graph*)malloc(sizeof(Graph));
    graph->vertices = vertices;
    
    // 隣接行列を0で初期化
    for (int i = 0; i < vertices; i++) {
        for (int j = 0; j < vertices; j++) {
            graph->adjMatrix[i][j] = 0;
        }
    }
    
    return graph;
}

// エッジの追加
void addEdge(Graph* graph, int src, int dest) {
    graph->adjMatrix[src][dest] = 1;
    graph->adjMatrix[dest][src] = 1; // 無向グラフの場合
}

// DFSの再帰的実装
void dfsRecursive(Graph* graph, int vertex, bool visited[]) {
    // 現在のノードを訪問済みとしてマーク
    visited[vertex] = true;
    printf("%d ", vertex);
    
    // すべての隣接ノードを調べる
    for (int i = 0; i < graph->vertices; i++) {
        if (graph->adjMatrix[vertex][i] == 1 && !visited[i]) {
            dfsRecursive(graph, i, visited);
        }
    }
}

// DFSのスタックを使った反復的実装
void dfsIterative(Graph* graph, int startVertex) {
    bool visited[MAX_VERTICES] = {false};
    int stack[MAX_VERTICES];
    int top = -1;
    
    // スタックに開始ノードをプッシュ
    stack[++top] = startVertex;
    
    while (top >= 0) {
        // スタックからノードをポップ
        int vertex = stack[top--];
        
        if (!visited[vertex]) {
            visited[vertex] = true;
            printf("%d ", vertex);
            
            // 隣接ノードをスタックにプッシュ (逆順にプッシュすると、自然な順序で探索される)
            for (int i = graph->vertices - 1; i >= 0; i--) {
                if (graph->adjMatrix[vertex][i] == 1 && !visited[i]) {
                    stack[++top] = i;
                }
            }
        }
    }
}

// 経路探索のためのDFS
bool dfsPath(Graph* graph, int start, int target, bool visited[], int path[], int* pathIndex) {
    visited[start] = true;
    path[(*pathIndex)++] = start;
    
    // 目標ノードに到達した場合
    if (start == target) {
        return true;
    }
    
    // すべての隣接ノードを調べる
    for (int i = 0; i < graph->vertices; i++) {
        if (graph->adjMatrix[start][i] == 1 && !visited[i]) {
            if (dfsPath(graph, i, target, visited, path, pathIndex)) {
                return true;
            }
        }
    }
    
    // バックトラック: このパスでは目標に到達できなかったので、現在のノードをパスから削除
    (*pathIndex)--;
    return false;
}

// 連結成分の数を数える
void countConnectedComponents(Graph* graph) {
    bool visited[MAX_VERTICES] = {false};
    int components = 0;
    
    printf("\\n連結成分:\\n");
    for (int i = 0; i < graph->vertices; i++) {
        if (!visited[i]) {
            printf("コンポーネント %d: ", components + 1);
            dfsRecursive(graph, i, visited);
            components++;
            printf("\\n");
        }
    }
    printf("合計 %d 個の連結成分が見つかりました\\n", components);
}

// メイン関数
int main() {
    // グラフの作成
    Graph* graph = createGraph(7);
    
    // エッジの追加
    addEdge(graph, 0, 1);
    addEdge(graph, 0, 2);
    addEdge(graph, 1, 3);
    addEdge(graph, 1, 4);
    addEdge(graph, 2, 5);
    addEdge(graph, 2, 6);
    
    printf("DFS (再帰的): ");
    bool visited_recursive[MAX_VERTICES] = {false};
    dfsRecursive(graph, 0, visited_recursive);
    printf("\\n");
    
    printf("DFS (反復的): ");
    dfsIterative(graph, 0);
    printf("\\n");
    
    // 経路探索
    bool visited_path[MAX_VERTICES] = {false};
    int path[MAX_VERTICES];
    int pathIndex = 0;
    
    if (dfsPath(graph, 0, 6, visited_path, path, &pathIndex)) {
        printf("ノード 0 から 6 への経路: ");
        for (int i = 0; i < pathIndex; i++) {
            printf("%d ", path[i]);
        }
        printf("\\n");
    } else {
        printf("ノード 0 から 6 への経路は見つかりませんでした\\n");
    }
    
    // 連結成分のカウント
    Graph* graph2 = createGraph(5);
    addEdge(graph2, 0, 1);
    addEdge(graph2, 2, 3);
    countConnectedComponents(graph2);
    
    free(graph);
    free(graph2);
    return 0;
}`,
    advantages: [
      'メモリ使用量が少ない（特に幅の狭い深いグラフ）',
      '実装が比較的簡単（再帰的実装の場合）',
      '経路の存在確認や、特定の経路を見つけるのに適している',
      '迷路の解法やパズルの解決、バックトラッキング問題に効果的',
      'トポロジカルソートやサイクルの検出に利用可能'
    ],
    disadvantages: [
      '最短経路を保証しない（重みなしグラフでも）',
      '無限ループの可能性があり、サイクル検出の仕組みが必要',
      '深いグラフではスタックオーバーフローの危険性がある（再帰実装の場合）',
      '幅優先探索より遅い場合がある（特に広いグラフ）'
    ],
    useCases: [
      '迷路の解法やパズルゲームの解決',
      'グラフの連結成分の検出',
      'グラフ内のサイクルの検出',
      '有向非巡回グラフ（DAG）のトポロジカルソート',
      '二部グラフの判定',
      '到達可能性のチェック（あるノードから別のノードへ到達可能か）'
    ]
  },
  {
    id: 'bfs',
    name: '幅優先探索',
    category: 'グラフアルゴリズム',
    tags: ['graph', 'traversal', 'shortest-path'],
    timeComplexity: {
      best: 'O(V + E)',
      average: 'O(V + E)',
      worst: 'O(V + E)'
    },
    spaceComplexity: 'O(V)',
    description: `幅優先探索（BFS: Breadth-First Search）は、グラフやツリー構造を探索するためのアルゴリズムの一つです。開始ノードから「幅」方向に探索を進め、開始ノードに近いノードから順に訪問していきます。重みなしグラフにおける最短経路を見つけるのに最適です。`,
    codeImplementation: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_VERTICES 100

// グラフ構造体
typedef struct {
    int vertices;
    int adjMatrix[MAX_VERTICES][MAX_VERTICES];
} Graph;

// キューの構造体
typedef struct {
    int items[MAX_VERTICES];
    int front;
    int rear;
} Queue;

// キューの初期化
Queue* createQueue() {
    Queue* queue = (Queue*)malloc(sizeof(Queue));
    queue->front = -1;
    queue->rear = -1;
    return queue;
}

// キューが空かチェック
bool isEmpty(Queue* queue) {
    return queue->front == -1 || queue->front > queue->rear;
}

// エンキュー操作
void enqueue(Queue* queue, int value) {
    if (queue->rear == MAX_VERTICES - 1) {
        printf("キューが満杯です\\n");
    } else {
        if (queue->front == -1) {
            queue->front = 0;
        }
        queue->rear++;
        queue->items[queue->rear] = value;
    }
}

// デキュー操作
int dequeue(Queue* queue) {
    int item;
    if (isEmpty(queue)) {
        printf("キューが空です\\n");
        item = -1; // エラーを示す値
    } else {
        item = queue->items[queue->front];
        queue->front++;
        // キューが空になったらリセット
        if (queue->front > queue->rear) {
            queue->front = queue->rear = -1;
        }
    }
    return item;
}

// グラフの初期化
Graph* createGraph(int vertices) {
    Graph* graph = (Graph*)malloc(sizeof(Graph));
    graph->vertices = vertices;
    
    for (int i = 0; i < vertices; i++) {
        for (int j = 0; j < vertices; j++) {
            graph->adjMatrix[i][j] = 0;
        }
    }
    
    return graph;
}

// エッジの追加
void addEdge(Graph* graph, int src, int dest) {
    graph->adjMatrix[src][dest] = 1;
    graph->adjMatrix[dest][src] = 1; // 無向グラフの場合
}

// BFSの実装
void bfs(Graph* graph, int startVertex) {
    bool visited[MAX_VERTICES] = {false};
    Queue* queue = createQueue();
    
    visited[startVertex] = true;
    enqueue(queue, startVertex);
    
    printf("BFS探索順序: ");
    
    while (!isEmpty(queue)) {
        int currentVertex = dequeue(queue);
        printf("%d ", currentVertex);
        
        // すべての隣接ノードを調べる
        for (int i = 0; i < graph->vertices; i++) {
            if (graph->adjMatrix[currentVertex][i] == 1 && !visited[i]) {
                visited[i] = true;
                enqueue(queue, i);
            }
        }
    }
    
    free(queue);
}

// 最短経路を求めるBFS
void bfsShortestPath(Graph* graph, int start, int target) {
    bool visited[MAX_VERTICES] = {false};
    int parent[MAX_VERTICES];
    int distance[MAX_VERTICES];
    Queue* queue = createQueue();
    
    // 初期化
    for (int i = 0; i < graph->vertices; i++) {
        parent[i] = -1;
        distance[i] = -1;
    }
    
    visited[start] = true;
    distance[start] = 0;
    enqueue(queue, start);
    
    printf("\\nノード %d から %d への最短経路:\\n", start, target);
    
    while (!isEmpty(queue)) {
        int currentVertex = dequeue(queue);
        
        // 目標ノードに到達した場合
        if (currentVertex == target) {
            printf("最短距離: %d\\n", distance[target]);
            
            // 経路を再構築
            printf("最短経路: ");
            int path[MAX_VERTICES];
            int pathLength = 0;
            int current = target;
            
            while (current != -1) {
                path[pathLength++] = current;
                current = parent[current];
            }
            
            // 逆順で出力
            for (int j = pathLength - 1; j >= 0; j--) {
                printf("%d ", path[j]);
            }
            printf("\\n");
            
            free(queue);
            return;
        }
        
        for (int i = 0; i < graph->vertices; i++) {
            if (graph->adjMatrix[currentVertex][i] == 1 && !visited[i]) {
                visited[i] = true;
                parent[i] = currentVertex;
                distance[i] = distance[currentVertex] + 1;
                enqueue(queue, i);
            }
        }
    }
    
    printf("ノード %d から %d への経路は見つかりませんでした\\n", start, target);
    free(queue);
}

// メイン関数
int main() {
    // グラフの作成
    Graph* graph = createGraph(8);
    
    // エッジの追加
    addEdge(graph, 0, 1);
    addEdge(graph, 0, 2);
    addEdge(graph, 1, 3);
    addEdge(graph, 1, 4);
    addEdge(graph, 2, 5);
    addEdge(graph, 2, 6);
    addEdge(graph, 4, 7);
    
    // BFS探索
    bfs(graph, 0);
    printf("\\n");
    
    // 最短経路探索
    bfsShortestPath(graph, 0, 7);
    
    free(graph);
    return 0;
}`,
    advantages: [
      '重みなしグラフにおいて最短経路を保証する',
      '完全性があり、到達可能なすべてのノードを探索できる',
      'レベル順の探索が可能で、開始ノードからの距離順にノードを訪問する',
      '最小スパニングツリーの構築や、ネットワークのブロードキャストに利用可能',
      '連結成分の検出に効果的'
    ],
    disadvantages: [
      '最悪の場合、グラフのすべてのノードをキューに保持する必要があるため、メモリ使用量が多い',
      '非常に幅の広いグラフでは、メモリ消費が問題となる可能性がある',
      '重み付きグラフの最短経路問題には直接適用できない（ダイクストラ法などのアルゴリズムが必要）'
    ],
    useCases: [
      '重みなしグラフにおける最短経路探索（例：ソーシャルネットワークの友人関係の最短パス）',
      'ウェブクローラーでのリンクの探索',
      'ネットワークブロードキャストやピアツーピアネットワークの探索',
      'パズルゲームの最短解を見つける（例：ルービックキューブ、15パズル）',
      'グラフの連結成分の検出',
      'レベル順のデータ処理やツリーのレベル順走査'
    ]
  }
];

// カテゴリ別のアルゴリズム取得
export const getAlgorithmsByCategory = (category) => {
  return algorithms.filter(algo => algo.category === category);
};

// タグ別のアルゴリズム取得
export const getAlgorithmsByTag = (tag) => {
  return algorithms.filter(algo => algo.tags.includes(tag));
};

// IDでアルゴリズム取得
export const getAlgorithmById = (id) => {
  return algorithms.find(algo => algo.id === id);
};

// すべてのカテゴリ取得
export const getAllCategories = () => {
  return [...new Set(algorithms.map(algo => algo.category))];
};

// すべてのタグ取得
export const getAllTags = () => {
  const allTags = algorithms.flatMap(algo => algo.tags);
  return [...new Set(allTags)];
};







